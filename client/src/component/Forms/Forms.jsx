import React ,{useContext,useEffect,useState} from 'react'
import { useSetState } from 'react-use';
import { AuthContext } from '../../context/Auth.context'
import { ValidateId } from '../../BackendApiCalls/ApiCall'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const initialState = {
    userId:'',
    userName: '',
    password: '',
    remember:false
  }
function Forms() {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const [isLinkValid, setIsLinkValid] = useState(false)
    useEffect(()=>{
      if (id){
        ValidateId(id).then((res)=>{
          console.log("hhh",res)
           setIsLinkValid(res)
        
    
        }).catch(err=>{
          setIsLinkValid(false)
        })
      }else{
        setIsLinkValid(false)
      }
    },[])
    
  
    // if (!id){
  
    // }
  
    const { state: ContextState, login } = useContext(AuthContext);
    const {
      isLoginPending,
      isLoggedIn,
      loginError
    } = ContextState;
    const [state, setState] = useSetState(initialState);
  
    const onSubmit = (e) => {
      e.preventDefault();
      const { userName, password,remember  } = state;
      if(userName.length < 5){
        alert("Auto fill not allowed ! userName Should be greater then 5")
        return
      }
      if(!isLinkValid){
        alert("Login Link ins invalid ! please Content Admin")
        return
      }
      login(id,userName, password, remember);
      setState({
        userName: '',
        password: ''
      });
      
    }
      
    const navigate = useNavigate()
    useEffect(()=>{
      if (isLoggedIn){
        // Navigate({"to":"/index"})
        navigate("/index");
        console.log("navigate to othe r location")
      }
  
    },[isLoggedIn])
   

    return (
        <>
        <div class="row row-gap-4">
        {!isLinkValid && <div style={{"color":"red"}}>Invalid Login URL</div>} 
            <div class="col-12">
                <label for="number" class="form-label fs-16">Enter your mobile number</label>
                <input type="text" class="form-control shadow-none  p-3 fs-16"   value={state.email} id="number" onChange={e => setState({userName: e.target.value})}  placeholder="Enter ragister mobile number"/>
            </div>
            <div class="col-12">
                <label for="password" class="form-label fs-16">Enter your password</label>
                <input type="password" class="form-control shadow-none  p-3 fs-16" id="password" value={state.password}  onChange={e => setState({password: e.target.value})} placeholder="Enter your password"/>
            </div>
            <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          value={state.remember}
                          id="rememberMe"
                          onChange={e =>setState({remember: !state.remember}) } 
                        />
                        <label
                          className="form-check-label"
                          for="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
            <div class="col-12 text-center">
                {/* <Link type="button" class="btn btn-theme1 w-100 p-3 fs-16 d-flex align-items-center justify-content-center">Login</Link> */}
                <input
                        className="btn btn-theme1 w-100 p-3 fs-16 d-flex align-items-center justify-content-center"
                        type="submit"
                        value="Login"
                        onClick={onSubmit}
                      />
            </div>
            {isLoginPending && <div>Please wait...</div>}
                    {isLoggedIn && <div style={{"color":"green"}}>Success.</div>}
                    {loginError && <div style={{"color":"red"}}>{loginError.message}</div>}
        </div>
        </>
    )
}

export default Forms