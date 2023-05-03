import FooterItem from "../footer-items";

function PupLinks() {
  return (
    <div className="mx-auto">
      <div className="service-download">
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
            items={[
              "For Students",
              "For Faculty and Employees",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default PupLinks;
