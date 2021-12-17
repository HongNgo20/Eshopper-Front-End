import { useRef, useState } from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { login, logout, useAuth} from "../../firebase.js"

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("incorrect password or username");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    
    <body>
    <div class="login-form">
    <form> 
      <h1>Login</h1>
      
      <div>Currently logged in as: { currentUser?.email } </div>

      <div class="form-group">
        <input id="username" ref={emailRef} placeholder="Email" />
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div>
      <div class="form-group">
      <input id="password" ref={passwordRef} type="password" placeholder="Password" />
      <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>
      </form>
      <button class="login-btn"disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
      <button class="login-btn" disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>

    </div>
    </body>
  );
}