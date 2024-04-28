import instance from "../Api";

export function AddUserToDb(userPayload){
    return new Promise((resolve,reject)=>{
        try{

            console.log("Payload", userPayload)


            instance({
              url:"o/admin/addnewuser",
              method: "POST",
              data :userPayload
            }).then((res) => {
               
              console.log("res.status",res.status)
              if (res.status == 200 || res.statusText == "OK"){
                  
                    console.log("store login in loacal ",res.data)
                // console.log("Set data to", processData)
                // setCoinData(processData)
                return resolve(res.data)
              } else if(res.status == 417) {
                return reject(res.data)
              }else{
                return reject(res.data)
              }
              // console.log("responce From API ",res)
             
            }); 
           } catch (e) {
            console.log("Error in API Call ", e)
            return resolve(false)
           }

    })
}

export function GetUserDetailsByPhoneNo(phoneNo) {
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/admin/getuserdetailbyphoneno",
              method: "POST",
              data :{phoneNo:phoneNo}
            }).then((res) => {
               
              console.log("res.status",res.status)
              if (res.status == 200 || res.statusText == "OK"){
                  
                if (res.data == "User Not Found"){
                    return reject(res.data)
                }
                    console.log("store login in loacal ",res.data)
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

export function GetCoinCurrentValue(CoinName) {
  return new Promise((resolve,reject) => {
      try{
          instance({
            url:"o/request/getcoincurrentvalue",
            method: "POST",
            data :{coinName:CoinName}
          }).then((res) => {
             
            console.log("res.status",res.status)
            if (res.status == 200 || res.statusText == "OK"){
                
              if (res.data == "User Not Found"){
                  return reject(res.data)
              }
                  console.log("store login in loacal ",res.data)
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


export function GetTotalUser(){
    return new Promise((resolve,reject) => {
        try{
            instance({
              url:"o/admin/gettotalusers",
              method: "GET"
            }).then((res) => {
               
              console.log("res.status",res.status)
              if (res.status == 200 || res.statusText == "OK"){
                  
                if (res.data == "User Not Found"){
                    return reject(res.data)
                }
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

export function AddCoinToUserAccount(tranDetails){
  return new Promise((resolve,reject) => {
    try{
        instance({
          url:"o/admin/addcointouseraccount",
          method: "POST",
          data: tranDetails
        }).then((res) => {
           
          console.log("res.status",res.status)
          if (res.status == 200 || res.statusText == "OK"){
              
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
          reject(false)
            console.log("catch block", err)
        })
       } catch (e) {
        console.log("Error in API Call ", e)
        return resolve(false)
       }
})
}

export function UpdateTelegramLink(linkObj){
  return new Promise((resolve,reject) => {
    try{
      console.log("in promis",linkObj)
        instance({
          url:"o/admin/updateTelegramLink",
          method: "POST",
          data: linkObj
        }).then((res) => {
           
          console.log("res.status",res.status)
          if (res.status == 200 || res.statusText == "OK"){
              
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
          reject(false)
            console.log("catch block", err)
        })
       } catch (e) {
        console.log("Error in API Call ", e)
        return resolve(false)
       }
})
}
export function UpdateAccountStatus(Accounts){
  return new Promise((resolve,reject) => {
    try{
        instance({
          url:"o/admin/freezeaccounts",
          method: "POST",
          data: Accounts
        }).then((res) => {
           
          console.log("res.status",res.status)
          if (res.status == 200 || res.statusText == "OK"){
              
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
          reject(false)
            console.log("catch block", err)
        })
       } catch (e) {
        console.log("Error in API Call ", e)
        return resolve(false)
       }
})
}
