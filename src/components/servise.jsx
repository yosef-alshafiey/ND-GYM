import Img1 from "../assets/f1.jpg";
import Img2 from "../assets/f2.jpg";
import Img3 from "../assets/f3.jpg";
import Img4 from "../assets/f4.jpg";
import Img5 from "../assets/f5.jpg";
import Img6 from "../assets/f6.jpg";

import "./../css/servise.css";

const Servise = () => {
  return (
    <div>
      <div className="container" id="section-service">
        <div className="banner">
          <h1>
            {" "}
            Our<span>service</span>{" "}
          </h1>
        </div>
      </div>
      <div className="features">
        <div className="fe-feature">
          <img src={Img6} />
          <h6>
            All though your very own custom-branded fitness app that elevates
            your gym’s brand, giving your gym members a consistent branded
            experience.
          </h6>
        </div>
        <div className="se-feature">
          <img src={Img1} />
          <h6>
            Take your gym member’s experience to a more premium place with the
            best software for gyms who take offering the best gym features .
          </h6>
        </div>
        <div className="th-feature">
          <img src={Img2} />
          <h6>
            {" "}
            Many members appreciate the ability to stream music, watch videos,
            or check emails during their workouts.
          </h6>
        </div>
        <div className="fo-feature">
          <img src={Img3} />
          <h6>
            Items such as resistance bands, stability balls, and kettlebells can
            enhance workouts by improving balance, strength, and flexibility
          </h6>
        </div>
        <div className="fi-feature">
          <img src={Img4} />
          <h6>
            Offering showers allows members to freshen up post-workout,
            especially beneficial for those heading to work or other
            commitments.
          </h6>
        </div>
        <div className="si-feature">
          <img src={Img5} />
          <h6>
            {" "}
            An indoor area with climate control provides a comfortable
            environment for year-round workouts.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Servise;
