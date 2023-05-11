import FooterItem from "../../containers/helpers/footerItem";

function Download() {
  return (
    <div className="mb-11 lg:mb-0">
      <FooterItem
        title="downloads"
        items={["For Students", "For Faculty and Employees"]}
      />
    </div>
  );
}

export default Download;
