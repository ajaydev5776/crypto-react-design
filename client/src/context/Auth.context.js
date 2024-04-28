import React from 'react';
import { useSetState } from 'react-use';
import { UserLogin } from '../BackendApiCalls/ApiCall';

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

  const login = (id,userName, password,remember) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin(id, userName, password,remember, error => {
      if (remember){
        localStorage.setItem('isLoggedIn', JSON.stringify({"userName":userName,"isLoggedIn":true,"userId":id}));
      }else{
        localStorage.setItem('isLoggedIn', JSON.stringify({"userName":userName,"isLoggedIn":false,"userId":id}));
      }
      setLoginPending(false);

      if (!error) {
        setLoginSuccess(true);
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
const fetchLogin = (userId,userName, password,remember,callback) => 
    UserLogin(userId,userName,password).then(res =>{
      console.log("responce From loogin", res)
      callback(null)
    }).catch(err =>{
      console.log("Error from APIIIIIIII", err)
      return callback(new Error("Unable to login "))
    })
  // setTimeout(() => {
  //   if (email === 'admin' && password === 'admin') {
  //     sessionStorage.setItem('myKey', 'myValue');
  //     return callback(null);
  //   } else {
  //     return callback(new Error('Invalid email and password'));
  //   }
  // }, 1000);