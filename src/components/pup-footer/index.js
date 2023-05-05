import FooterItem from "../footer-items";
import Download from "../download-link";
import Services from "../service-link";
import Socmed from "../socmed";
import Quicklinks from "../quick-link";
import Contact from "../contact-link";
import Terms from "../terms-link";

function PUPFooter() {
  return (
    <div className="mx-auto  px-[15px] pt-[60px]">
      <div className="container lg:flex lg:justify-center">
        <div className="w-full lg:w-1/4 service-download">
          <Services />
          <Download />
        </div>

        <div className="w-full quick-links lg:w-1/4">
          <Quicklinks/>
        </div>
        <div className="block w-full lg:flex lg:flex-col lg:justify-between socmed lg:w-1/2">
          <Socmed/>
          <Contact/>
          <Terms/>
        </div>
      </div>
      {/* copyright */}
      <div>
        <p className="text-xs text-center uppercase py-14 text-primary-gray">
          © 1998-2021 Polytechnic University of the Philippines
        </p>
      </div>
    </div>
  );
}

export default PUPFooter;
