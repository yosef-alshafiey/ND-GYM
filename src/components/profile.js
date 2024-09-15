import "./../css/profile.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Video from "./video";
import Servise from "./servise";
import About from "./about";
import Classes from "./classes";
import Contact from "./contact";

function Profile() {
  return (
    <div className="profile-body">
      <Navbar />
      <Hero />
      <Video />
      <Servise />
      <About />
      <Classes />
      <Contact />
    </div>
  );
}

export default Profile;
