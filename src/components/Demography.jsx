import DemoChart from "./DemoChart";

const Demography = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <h2 className=" text-3xl my-4 p-2 font-titalium">
        {" "}
        Our Student <span className=" text-secondary">Demography</span>{" "}
      </h2>
      <div className="flex justify-around gap-6 w-full md:w-3/4">
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">1387</h2>
          <span className="text-lg font-poppins">Total</span>
        </div>
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">743</h2>
          <span className="text-lg font-poppins">Male</span>
        </div>
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">644</h2>
          <span className="text-lg font-poppins">Female</span>
        </div>
      </div>
      <div className="">
        <DemoChart />
      </div>
    </div>
  );
};

export default Demography;
