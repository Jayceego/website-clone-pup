function PostalComponent({ details }) {
  return (
    <div className="postalComponent">
      {details.map((item, key) => {
        return (
          <div key={key}>
            <h2 className="mb-5 text-lg font-semibold leading-6 text-primary-red">
              {item.head}
            </h2>
            <blockquote>
              <p className=" leading-[2] text-primary-low_dark text-[17.5px] font-normal">
                {item.title}
                <br />
                <strong>{item.office}</strong>
                <br />
                {item.floor}
                <br />
                {item.street}
                <br />
                {item.city}
                <br />
                {item.cell}
                <br />
                {item.tel}
              </p>
            </blockquote>
          </div>
        );
      })}
    </div>
  );
}

export default PostalComponent;
