// src/components/signInWIthGoogle.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import "./../css/login.css";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user) {
          try {
            await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              firstName: user.displayName,
              photo: user.photoURL,
              lastName: "",
            });
            toast.success("User logged in Successfully", {
              position: "top-center",
            });
            window.location.href = "/profile";
          } catch (error) {
            console.error("Error writing document: ", error);
            toast.error("Failed to save user data", {
              position: "top-center",
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error during Google Sign-In: ", error);
        toast.error("Google Sign-In failed", {
          position: "top-center",
        });
      });
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>

      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
        className="sign-google"
      >
        <img src={require("../google.png")} width={"60%"} alt="Google Logo" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
