import FooterItem from "../../containers/helpers/footerItem";

function Quicklinks() {
  return (
    <div className="mb-11 lg:mb-0">
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
  );
}

export default Quicklinks;
