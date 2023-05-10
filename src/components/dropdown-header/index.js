const dropdownItems = ["University Profile", "Vision and Mission", "History"];

function Dropdown() {
  return (
    <div className="absolute z-10 flex flex-col items-start dropdown">
      {dropdownItems.map((title, key) => {
        return (
          <a key={key} className=" text-primary-gray">
            {title}
          </a>
        );
      })}
    </div>
  );
}

export default Dropdown;
