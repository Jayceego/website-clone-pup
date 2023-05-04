import FooterItem from "../footer-items";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

function Socmed() {
  return (
    <div className="mb-11 lg:mb-0">
      <FooterItem title="Keep in touch" />
      <div className="flex flex-wrap gap-5 mt-3 socmed-icons">
        <div className="fb">
          <FaFacebookF />
        </div>
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="yt">
          <FaYoutube />
        </div>
        <div className="linkedin">
          <FaLinkedinIn />
        </div>
        <div className="rss">
          <FaRss />
        </div>
        <div className="spotify">
          <FaSpotify />
        </div>
      </div>
    </div>
  );
}

export default Socmed;
