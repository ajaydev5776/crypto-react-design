import instance from '../Api.js'


export function UserLogin(id, userName,password){
    return new Promise((resolve,reject) =>{
        try{
            instance({
                url:"/o/user/login",
                method: "POST",
                data : {userId:id,userName : userName,password:password}
            }).then((res)=>{
                if (res.status ==200 || res.statusText == "OK"){

                    // console.log("responce from login API", res.data)
                    return resolve(res.data)
                }else if(res.status == 417){
                    return reject(res.data)
                }else{
                    return reject(res.data)
                }
            }).catch(err=>{
                console.log("Error in api call", err)
                return reject(false)
            })

        } catch(err){
console.log("Error in API Call",err)
return reject(err)
        }
    })
}

export function ValidateId(userId){
    return new Promise((resolve,reject) =>{
        try{
            instance({
                url:"/o/user/validateid",
                method: "POST",
                data : {Id:userId}
            }).then((res)=>{
                if (res.status ==200 || res.statusText == "OK"){

                    // console.log("responce from login API", res.data)
                    return resolve(res.data)
                }else if(res.status == 417){
                    return reject(false)
                }else{
                    return reject(false)
                }
            }).catch(err=>{
                console.log("Error in api call", err)
                return reject(false)
            })

        } catch(err){
console.log("Error in API Call",err)
return reject(err)
        }
    })
}

export function GetAllTransitionOfUser(user){
    return new Promise((resolve,reject) =>{
        try{
            instance({
                url:"/o/request/getalltransitionofuser",
                method: "POST",
                data : user
            }).then((res)=>{
                if (res.status ==200 || res.statusText == "OK"){

                    // console.log("responce from login API", res.data)
                    return resolve(res.data)
                }else if(res.status == 417){
                    return reject(false)
                }else{
                    return reject(false)
                }
            }).catch(err=>{
                console.log("Error in api call", err)
                return reject(false)
            })

        } catch(err){
console.log("Error in API Call",err)
return reject(err)
        }
    })
}

export function GetCoinCurrentValue(CoinName) {
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/request/getcoincurrentvalue",
              method: "POST",
              data :{coinName:CoinName}
            }).then((res) => {
               
              // console.log("res.status",res.status)
              if (res.status == 200 || res.statusText == "OK"){
                  
                if (res.data == "User Not Found"){
                    return reject(res.data)
                }
                    // console.log("store login in loacal ",res.data)
                // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              } else if(res.status == 417) {
                return reject(res.data)
              }else{
                return reject(res.data)
              }
              // console.log("responce From API ",res)
             
            }).catch(err =>{
                console.log("catch block", err)
            })
           } catch (e) {
            console.log("Error in API Call ", e)
            return resolve(false)
           }
    })
  }

  export function GetCoinValue(CoinName) {
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/request/getcoinvalue",
              method: "POST",
              data :{coinName:CoinName}
            }).then((res) => {
               
              // console.log("res.status",res.status)
              if (res.status == 200 || res.statusText == "OK"){
                // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              }else{
                return reject(res.data)
              }             
            }).catch(err =>{
                return reject(false)
            })
           } catch (e) {
            // console.log("Error in API Call ", e)
            return reject(false)
           }
    })
  }

export function GetTelegramLink(key){
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/admin/getTelegramLink",
              method: "POST",
              data :{key:key}
            }).then((res) => {
              if (res.status == 200 || res.statusText == "OK"){
                // // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              }else{
                return reject(res.data)
              }             
            }).catch(err =>{
                return reject(false)
            })
           } catch (e) {
            console.log("Error in API Call ", e)
            return reject(false)
           }
    })
}

export function GetAccountStatus(phoneNo){
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/admin/getuserdetailbyphoneno",
              method: "POST",
              data :{phoneNo:phoneNo}
            }).then((res) => {
              if (res.status == 200 || res.statusText == "OK"){
                // // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              }else{
                return reject(res.data)
              }             
            }).catch(err =>{
                return reject(false)
            })
           } catch (e) {
            console.log("Error in API Call ", e)
            return reject(false)
           }
    })
}

export function WithdrawMoney(obj){
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/request/withdrawmoney",
              method: "POST",
              data :obj
            }).then((res) => {
              if (res.status == 200 || res.statusText == "OK"){
                // // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              }else{
                return reject(res.data)
              }             
            }).catch(err =>{
                return reject(false)
            })
           } catch (e) {
            console.log("Error in API Call ", e)
            return reject(false)
           }
    })
}


export function GetAllPlan(){
  return new Promise((resolve,reject) => {
      try{
          instance({
            url:"o/request/getallplan",
            method: "GET"
          }).then((res) => {
            if (res.status == 200 || res.statusText == "OK"){
              // // console.log("Set data to", processData)
              // setCoinData(processData)
              return resolve(res.data)
            }else{
              return reject(res.data)
            }             
          }).catch(err =>{
              return reject(false)
          })
         } catch (e) {
          console.log("Error in API Call ", e)
          return reject(false)
         }
  })
}