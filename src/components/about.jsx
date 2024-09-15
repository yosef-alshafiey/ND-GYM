import "./../css/about.css";

const About = () => {
  return (
    <div id="section-about">
      <div className="about-text">
        <h1>
          About The <span>Gym</span>
        </h1>
        <h6>
          We’re not just a gym with the latest equipment, we also provide you
          with various classes that will help you achieve your fitness goals.
        </h6>
      </div>
      <div className="about-des">
        <div className="des-1">
          <h2>WORKING HOURS</h2>
          <h6>
            MEN BRANCHES ARE AVAILABLE FROM 6 AM - 1 AM LADIES BRANCHES ARE
            AVAILABLE FROM 7 AM – 11 PM
          </h6>
        </div>
        <div className="des-3">
          <h2>FIND US</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634710315!2d31.299664123116912!3d30.0595563169818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1722388169349!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <div className="des-1">
          <h2>LATEST NEWS</h2>
          <h6>VISIT OUR NEW GOLF LADIES BRANCH! FIND US ON GOOGLE MAPS</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
