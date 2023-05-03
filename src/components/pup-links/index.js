import FooterItem from "../footer-items";
import Download from "../download-link";
import Services from "../service-link";
import Socmed from "../socmed";
import Quicklinks from "../quick-link";

function PupLinks() {
  return (
    <div className="mx-auto ">
      <div className="flex">
        <div className="w-full lg:w-1/4 service-download">
          <Services />
          <Download />
        </div>

        <div className="w-full quick-links lg:w-1/4">
          <Quicklinks/>
        </div>
        <div className="w-full socmed lg:w-1/2">
          <Socmed/>
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

export default PupLinks;
