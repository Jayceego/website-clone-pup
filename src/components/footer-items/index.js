const FooterItem = ({ title, items }) => {
  return (
    <div>
      <p className="pb-2 text-sm font-bold uppercase text-primary-red">
        {title}
      </p>
      <ul>
        {items &&
          items.map((value, key) => {
            return (
              <a
                key={key}
                className="block my-[10px] text-[12pt] text-primary-low_dark font-light select-none hover:underline hover:cursor-pointer"
              >
                {value}
              </a>
            );
          })}
      </ul>
    </div>
  );
};

export default FooterItem;
