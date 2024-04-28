import React from 'react';
import { useSetState } from 'react-use';
import instance  from './Api.js'

export const AuthContext = React.createContext(null);

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}

export const ContextProvider = props => {
  const [state, setState] = useSetState(initialState);

  const setLoginPending = (isLoginPending) => setState({isLoginPending});
  const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
  const setLoginError = (loginError) => setState({loginError});

  const login = (userName, password,remember) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin( userName, password,remember, error => {
      setLoginPending(false);

      if (!error) {
        setLoginSuccess(true);
        if (remember){
          localStorage.setItem('isLoggedIn', JSON.stringify({"userName":userName,"isLoggedIn":true}));
        }else{
          localStorage.removeItem('isLoggedIn')
        }
      } else {
        setLoginError(error);
      }
    })
  }

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// fake login
const fetchLogin = (userName, password,remember, callback) => 
 
    CallApi({"userName":userName,"password":password,"remember":remember}).then(res => {
        if (res){
            console.log("in fetch then", res)
            return callback(null)
        } else {
            console.log("in fetch else", res)
            return callback(new Error('Invalid email and password'))
        }
    }).catch(err =>{
      return callback(new Error("Unable to login due to some Server Error"))
    })
    // if (userName === 'admin' && password === 'admin') {
    //   return callback(null);
    // } else {
    //   return callback(new Error('Invalid email and password'));
    // }


  const CallApi = (userDetails) => {
    return new Promise((resolve,reject) =>{
      try{
        var payload = {
          "userName": userDetails.userName,
          "passWord":userDetails.password
        }
        console.log("Payload", payload)
        instance({
          url:"/o/admin/login",
          method: "POST",
          data :payload
        }).then((res) => {
           
          console.log("res.status",res.status)
          if (res.status == 200 || res.statusText == "OK"){
            console.log("store login in loacal ",userDetails)
              if (res.data && userDetails.remember){
                console.log("store login in loacal ")
              }
            // console.log("Set data to", processData)
            // setCoinData(processData)
            return resolve(res.data)
          } else {
            return resolve(false)
          }
          // console.log("responce From API ",res)
         
        }).catch(err=>{
            return reject("Server Error ", err)
        })
       } catch (e) {
        console.log("Error in API Call ", e)
        return resolve(false)
       }
    })
  }