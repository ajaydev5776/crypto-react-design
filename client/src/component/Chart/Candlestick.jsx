import React, { Component, useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import instance from '../../Api';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { GetCoinValue } from "../../BackendApiCalls/ApiCall";

const Candlestick = ({CoinDetails,SetCoinValue}) => {
  const [CoinData, setCoinData] = useState([])

  // var WS_URL = "ws://216.225.197.171:4480/o/ws/getbitcoinvalue" 
  // if (process.env.NODE_ENV !== 'production'){
  //   WS_URL = "ws://localhost:4480/o/ws/getbitcoinvalue"
  // }
  // const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
  //   WS_URL,
  //   {
  //     share: false,
  //     shouldReconnect: () => true,
  //   },
  // )

  // useEffect(()=>{
  //   // const socket = new WebSocket("ws://localhost:4480/o/ws/getbitcoinvalue")
  //   console.log("Connection state changed")
  //   // socket.addEventListener("open", (event) =>{
  //   //   socket.send("Connection established")
  //   // })
  //   if (readyState === ReadyState.OPEN) {
  //     sendJsonMessage(
  //       {
  //         "coin":CoinDetails,
  //         "userId":userId 
  //     }) 
  //   }
   
  // },[readyState,CoinDetails])

  const [currentData, setCurrentData] = useState({})
  var timeoutId
  useEffect(()=>{
    timeoutId = setInterval(() => {
      GetCoinValue(CoinDetails).then(res =>{
        setCurrentData(res)
        SetCoinValue({coinname: CoinDetails,value : res.high})
      })
    }, 60000);

    return () => clearTimeout(timeoutId);
  },[CoinDetails])

  const [series, setSeries] = useState(
    [{
      name: 'candle',
      data: []
    }]
  )

  useEffect(() => {
    if (currentData){

      console.log(`Got a new message:`, currentData)
      var obj = {
        x: new Date(currentData.time * 1000),
        y: [currentData.open,currentData.low,currentData.high,currentData.close]
      }
      console.log("dsadsds",series[0])
      var updateCoinData = series[0].data
      updateCoinData.push(obj)
      if (series[0].data.length > 200){
        series[0].data.shift()
      }
      setSeries([{name:"candle",data:[...series[0].data,obj]}]) 
      // setSeries( [{
      //   name: 'candle',
      //   data: bitData
      // }])
    }
  }, [currentData])
  
  useEffect(()=>{
    console.log("calledddddd",CoinDetails)
    // if(series[0].data.length == 0){
      CallApi(CoinDetails).then((res)=>{
        // console.log("response from CallAPI", res)
        // setCoinData(res)
        // setCoinData((prev)=>[...prev,res])
        setSeries([{name:"candle",data:res}])
        // setCoinData([res])
      }).catch(e=>{
        console.log("error from CallAPI", e)
        
      })
    // }
  },[CoinDetails])

  // setTimeout(()=>{
  //   console.log("CoinData",series)
  // },1000)

  const CallApi = (coin) => {
    return new Promise((resolve,reject) =>{
      try{
        var payload = {
          "coinName": coin,
          "currentTime" : Math.ceil((new Date).getTime() / 1000),
           "beforeTimeInHour": 3.0
        }
        console.log("Payload", payload)
        instance({
          url:"o/request/getpreviousdata",
          method: "POST",
          data :payload
        }).then((res) => {
          if (!res.data){
            return resolve([])
          }
          var processData = []
          console.log("res.status",res.status)
          if (res.status == 200 || res.statusText == "OK"){
            for (var i=0;i<res.data.length; i++){
              var d = new Date((res.data[i].time * 1000 ))
              // d.toLocaleString(undefined,{timeZone: "Asia/Kolkata"})
              processData.push({
                x:  d,
                  y: [res.data[i].open, res.data[i].low, res.data[i].high, res.data[i].close]
              })
            }
            // console.log("Set data to", processData)
            // setCoinData(processData)
            return resolve(processData)
          }
          // console.log("responce From API ",res)
          return resolve(true)
        }); 
       } catch (e) {
        console.log("Error in API Call ", e)
        return resolve(false)
       }
    })
  }

  
  const [options, setObject] = useState(
    {
      chart: {
        type: "candlestick",
        height: 450,
      },
      title: {
        text: CoinDetails+"/INR",
        align: "left",
      },
      xaxis: {
        type: "datetime",
        lines: {
          show: true, // Show vertical gridlines
        },
        labels: {
          datetimeUTC: false
        }
      },
      yaxis: {
        opposite: true,
        tooltip: {
          enabled: true,
        },
      },
      grid: {
        show: true,
        borderColor: '#ffffff26', // Color of the gridlines
        strokeDashArray: 1, // Optional: Specify the stroke dash array
        position: 'back', // Optional: Specify the position of the gridlines ('back' or 'front')
        xaxis: {
          lines: {
            show: true, // Show vertical gridlines
          },
          label: 'MMMM'
        },
        yaxis: {
          lines: {
            show: true, // Hide horizontal gridlines
          }
        },
      },
      plugins: {
        legend: {
          display: false, // hide display data about the dataset
        },
        tooltip: { // modify graph tooltip
          backgroundColor: 'rgba(53, 27, 92, 0.8)',
          caretPadding: 5,
          boxWidth: 5,
          usePointStyle: 'triangle',
          boxPadding: 3
        }
      }
    }
  )

  useEffect(()=>{
    setObject((prevState) => ({
      ...prevState,
      title:{text: CoinDetails + "/INR"},
    }));
    // options.title.text = 
  },[CoinDetails])

  

  

  return (
   <>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="candlestick" height={400}/>
        </div>
   </>
  )
}


export default Candlestick;