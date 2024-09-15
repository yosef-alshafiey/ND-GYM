import "./../css/classes.css";
import Img1 from "./../assets/c1.jpg";
import Img2 from "./../assets/c2.jpg";
import Img3 from "./../assets/c3.jpg";
import Img4 from "./../assets/c4.jpg";
import Img5 from "./../assets/c5.jpg";
import Img6 from "./../assets/c6.jpg";

const Classes = () => {
  return (
    <div>
      <div className="class-text">
        <h1>
          {" "}
          classes of<span>Gym</span>{" "}
        </h1>
      </div>
      <div className="class-container">
        <div className="class-item">
          <img src={Img1} />
          <h2>Zumba</h2>
          <h6>
            If your goal is to lose weight faster and improve your overall
            health, Zumba is the way to go
          </h6>
        </div>
        <div className="class-item">
          <img src={Img2} />
          <h2>Yuga</h2>
          <h6>
            Yoga is a type of exercise in which you move your body into various
            positions in order to become more fit or flexible, to improve your
            breathing, and to relax your mind.
          </h6>
        </div>
        <div className="class-item">
          <img src={Img3} />
          <h2>Tramoline</h2>
          <h6>
            Trampolining is a low-impact exercise that works several joints
            without placing undue stress on them, thus reducing the likelihood
            of chronic injuries. Calorie loss.
          </h6>
        </div>
        <div className="class-item">
          <img src={Img4} />
          <h2>Spinning</h2>
          <h6>
            spinning is particularly effective for weight loss due to its
            high-intensity and low-impact nature.
          </h6>
        </div>
        <div className="class-item">
          <img src={Img5} />
          <h2>ABS</h2>
          <h6>
            our ab muscles are important to your overall well-being and quality
            of life. Strong ab muscles can help improve balance, coordination,
            posture, and stability.
          </h6>
        </div>
        <div className="class-item">
          <img src={Img6} />
          <h2>KickBoxing</h2>
          <h6>
            Kickboxing is one of the most popular combat sports around the
            world. Kickboxing derives its name from classic boxing as it
            incorporates punching and other striking techniques.{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Classes;
