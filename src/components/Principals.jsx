const Principals = () => {
  const principalsData = [
    {
      name: "Mrs. Martins Later Mrs. Shobande",
      dateIn: "1980",
      dateOut: "1984",
    },
    { name: "Mr. Bakrin", dateIn: "1984", dateOut: "1987" },
    { name: "(Mrs) Chief Opajobi.O.Or", dateIn: "1987", dateOut: "1992" },
    { name: "Mr. Omotola.A", dateIn: "1993", dateOut: "1995" },
    { name: "Mr. M.O Ajayi", dateIn: "1995", dateOut: "1997" },
    { name: "Mr. B.B Lawal", dateIn: "1997", dateOut: "1998" },
    { name: "Mr. B.O Okutade", dateIn: "1998", dateOut: "2000" },
    { name: "Mr. Sholanke E.O", dateIn: "2000", dateOut: "2010" },
    { name: "Mr. Adeoye M.O", dateIn: "2010", dateOut: "2011" },
    { name: "Mr. Jibowo S.S", dateIn: "2011", dateOut: "2014" },
    { name: "Mr. Sobulo O.O", dateIn: "2014", dateOut: "2020" },
    { name: "Mrs. Akinbode I.O", dateIn: "2020", dateOut: "2020" },
    { name: "Mr. Adeoye M.O", dateIn: "2020", dateOut: "2023" },
    { name: "Mr. Akinbode T.D", dateIn: "2023", dateOut: "Present" },
  ];

  return (
    <div className="flex justify-center">
      <table className="table-auto w-5/6 p-5 text-left font-poppins border border-primary rounded-full">
        <caption className="text-2xl font-titalium font-bold mb-4">
          List of Principals
        </caption>
        <thead>
          <tr className="capitalize bg-primary font-titalium">
            <th className="px-4 py-2">Names</th>
            <th className="px-4 py-2">Date In</th>
            <th className="px-4 py-2">Date Out</th>
          </tr>
        </thead>
        <tbody className="border">
          {principalsData.map((principal, index) => (
            <tr
              key={index}
              className="border border-primary rounded-lg hover:bg-primary/55 text-sm"
            >
              <td className="px-4 py-2">{principal.name}</td>
              <td className="px-4 py-2">{principal.dateIn}</td>
              <td className="px-4 py-2">{principal.dateOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Principals;
