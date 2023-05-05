import PUPFooter from "@/components/pup-footer";
import GovFooter from "@/components/gov-footer";

function FooterPup() {
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

export default FooterPup;
