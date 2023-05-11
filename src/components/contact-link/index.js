import FooterItem from "../../containers/helpers/footerItem";

function Contact() {
  return (
    <div className="mb-11 lg:mb-0">
      <FooterItem title="contact us" />
      <p className="font-normal text-[12pt] text-primary-low_dark">
        Phone:{" "}
        <span className="font-semibold">
          (+63 2) 5335-1PUP (5335-1787) or 5335-1777
        </span>
      </p>
      <p className="font-normal text-[12pt] text-primary-low_dark">
        Email: <span className="font-semibold">inquire@pup.edu.ph</span>
      </p>
    </div>
  );
}

export default Contact;
