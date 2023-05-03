import FooterItem from "../footer-items";

function PupLinks() {
  return (
    <div className="mx-auto">
      <div className="flex">
        {/* service and download */}
        <div className="w-full lg:w-1/4 service-download">
          <div className="services mb-11">
            <FooterItem
              title="ONLINE SERVICES"
              items={[
                "PUP WebMail",
                "PUP iApply",
                "SIS for Students",
                "SIS for Faculty",
              ]}
            />
          </div>
          <div className="downloads">
            <FooterItem
              title="downloads"
              items={["For Students", "For Faculty and Employees"]}
            />
          </div>
        </div>
        {/* quick links */}
        <div className="w-full quick-links lg:w-1/4">
          <FooterItem
            title="quick links"
            items={[
              "About PUP",
              "Admission Information",
              "Branches and Campuses",
              "Academic Programs",
              "Transparency Seal",
              "Bid Notices and Invitation",
              "International Affairs",
              "Jobs for PUPians",
            ]}
          />
        </div>
        <div>
          
        </div>
      </div>
      {/* copyright */}
      <div>
        <p className="text-xs text-center capitalize py-14 text-primary-gray">
          © 1998-2021 Polytechnic University of the Philippines
        </p>
      </div>
    </div>
  );
}

export default PupLinks;
