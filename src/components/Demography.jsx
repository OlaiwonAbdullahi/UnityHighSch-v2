const Demography = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="flex justify-around gap-6 w-full md:w-3/4">
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">2341</h2>
          <span className="text-lg font-poppins">Total</span>
        </div>
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">2341</h2>
          <span className="text-lg font-poppins">Male</span>
        </div>
        <div className="border border-primary basis-1/3 rounded-md p-4 flex flex-col items-center justify-center shadow-sm bg-white">
          <h2 className="text-3xl font-bold font-titalium">2341</h2>
          <span className="text-lg font-poppins">Female</span>
        </div>
      </div>
    </div>
  );
};

export default Demography;
