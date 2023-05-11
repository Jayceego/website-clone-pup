import FooterItem from "../../containers/helpers/footerItem";
import Link from "next/link";
import socmedLinks from "@/containers/helpers/socmedlinks";

function Socmed() {
  return (
    <div className="mb-11 lg:mb-0">
      <FooterItem title="Keep in touch" />
      <div className="flex flex-wrap gap-5 mt-3 socmed-icons">
        {socmedLinks.map((link, index) => (
          <div key={index} className={link.className}>
            <Link href={link.href} passHref target="_blank">
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Socmed;
