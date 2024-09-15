import "./../css/contact.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-section" id="section-contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
        <div className="contact-details">
          <div className="detail">
            <i>
              <FaPhone className="icon" />
            </i>
            <span>Phone: 01210165788</span>
          </div>
          <hr />
          <div className="detail">
            <i>
              <MdEmail className="icon" />
            </i>
            <span>Email: youssefelshafiey37@gmail.com</span>
          </div>
          <hr />
          <div className="detail">
            <i>
              <IoHome className="icon" />
            </i>
            <span>Address: 123 Gym Street, Fitness City</span>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
