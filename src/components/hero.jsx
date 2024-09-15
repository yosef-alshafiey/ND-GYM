import Img from "./../assets/h1.jpg";
import "./../css/hero.css";

const hero = () => {
  return (
    <div>
      <div className="hero-ban" style={{ backgroundImage: `url(${Img})` }}>
        <div className="des">
          <h1>Get More Out Of Your Fitness Journey</h1>
          <br />
          <p>
            Some people, like me and you, need the extra motivation to go to the
            gym, complete workout sets and generally stay on track with our
            fitness goals. With the numerous distractions available, it can be
            very challenging to push yourself to start that home workout or go
            to the gym – trust me, I know.
          </p>
          <br />
          <a href="#section-contact">
            <button>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
