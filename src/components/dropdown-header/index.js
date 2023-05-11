function Dropdown({navigation}) {
  return (
    <div className="absolute z-10 flex flex-col items-start dropdown">
      {navigation.map((title, key) => {
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
