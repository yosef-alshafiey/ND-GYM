import Vid from "./../assets/vid.mp4";
import "./../css/video.css";
const video = () => {
  return (
    <div className="vid-ban">
      <video className="video-player" controls autoPlay muted>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1> YOU,VE GOT NO LIMITS</h1>
    </div>
  );
};

export default video;
