const TopTenTable = ({ title, headers, data }) => {
  return (
    <div className="mb-6 border rounded-lg shadow-lg overflow-hidden bg-white">
      <h2 className=" bg-[#1a2129] text-white text-lg font-bold p-4 text-center uppercase">
        {title}
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            {headers.map((header, index) => (
              <th key={index} className="border-b p-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all"
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="border-b p-3 text-gray-800">
                  {row[header.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TopTenTable;
