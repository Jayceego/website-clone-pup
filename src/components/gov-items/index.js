
const GovItems = ({ title, items }) => {
    return (
      <div>
        <p className="text-xs text-primary-gray mt-5 mb-[10px] font-semibold">
          {title}
        </p>
        <ul>
          {items &&
            items.map((value, key) => {
              return (
                <a
                  key={key}
                  className="block text-[8pt] text-primary-dark_gray font-normal leading-6 select-none hover:underline hover:cursor-pointer"
                >
                  {value}
                </a>
              );
            })}
        </ul>
      </div>
    );
  };
  
  export default GovItems;
  