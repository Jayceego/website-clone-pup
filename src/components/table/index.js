
function Table({ data }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="p-2">
            Specific Concerns
          </th>
          <th className="p-2">
            E-mail
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y">
        {data.map((item, key) => {
          return (
            <tr key={key}>
              <td className="p-2">
                {item.concern}
              </td>
              <td className="p-2 text-right">
                {item.email}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
