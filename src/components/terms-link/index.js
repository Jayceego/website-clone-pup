import FooterItem from "../footer-items";

const links = [
  {
    title: "Terms of Use",
  },
  {
    title: "Privacy Statement",
  },

  {
    title: "About PUPWebSite",
  },
];

function Terms() {
  return (
    <div className="term mb-11 lg:mb-0">
      <FooterItem title="pupwebsite 10" />
      <div className="flex flex-wrap inner-term">
        {links.map((pup, key) => (
          <div key={key}>
            <a className="text-[12pt] text-primary-low_dark font-normal select-none hover:underline hover:cursor-pointer">
              {pup.title}
            </a>
            <span className="mx-2 span text-primary-low_dark">|</span>
          </div>
        ))}
      </div>    
    </div>
  );
}

export default Terms;
