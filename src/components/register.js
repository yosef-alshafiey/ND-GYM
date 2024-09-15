import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./../css/register.css";
import Img from "../assets/2.jpg";

function Register() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Write user data to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "", // If you have a photo URL or other fields, add them here
      });

      console.log("User Registered Successfully!");
      toast.success("User Registered Successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error:", error.message);
      toast.error("Registration failed: " + error.message, {
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

      <div className={`register-container ${isDarkMode ? "dark" : ""}`}>
        <form onSubmit={handleRegister} className="register-form">
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password">
            Already registered <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
