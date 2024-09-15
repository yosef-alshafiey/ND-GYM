import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Auth state changed:', user);
      setUser(user);
      setLoading(false);  // Set loading to false after user state is updated
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display a loading screen while checking auth state
  }

  return (
    <Router>
      <div className="auth-wrapper">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
