const Widget = ({ title, items }) => {
  return (
    <div className="widget">
      <h4 className="relative pb-2 text-sm font-medium leading-[22px] uppercase text-primary-red">{title}
      <span className="shortLine"></span></h4>
      
      <ul className="grid gap-2">
      {items &&
        items.map((value, key) => {
          return (
            <li key={key} className=" pb-2 leading-[2] text-primary-low_dark">
                <a>{value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Widget;
