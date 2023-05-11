import FooterItem from "../../containers/helpers/footerItem";

function Services() {
  return (
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
  );
}

export default Services;
