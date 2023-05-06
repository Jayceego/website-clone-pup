import PUPFooter from "@/components/pup-footer";
import GovFooter from "@/components/gov-footer";

function Footer() {
  return (
    <>
      <div className="container footer-pup">
        <PUPFooter />
      </div>
      <div className="container footer-gov">
        <GovFooter />
      </div>
    </>
  );
}

export default Footer;
