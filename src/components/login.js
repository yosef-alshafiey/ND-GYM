import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import "./../css/login.css";
import Img from "../assets/11.jpg";

function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <div className="body" style={{ backgroundImage: `url(${Img})` }}></div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeToggle" className="toggle-button"></label>
      </div>
      <div className={`login-container ${isDarkMode ? "dark" : ""}`}>
        <form onSubmit={handleSubmit} className="login-form">
          <h3>Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password">
            New user <a href="/register">Register Here</a>
          </p>
          <SignInwithGoogle  className="si-go"/>
        </form>
      </div>
    </div>
  );
}

export default Login;
