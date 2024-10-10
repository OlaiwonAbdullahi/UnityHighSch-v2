const Feature = () => {
  return (
    <div className="bg-primary text-text font-semibold font-titalium text-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 md:basis-1/3 basis-1">
          <span className="text-6xl sm:text-7xl">20+</span>
          <span className="text-2xl">Teachers</span>
        </div>
        <div className="flex flex-col gap-2 md:basis-1/3 basis-1">
          <span className="text-6xl sm:text-7xl">250+</span>
          <span className="text-2xl">Students</span>
        </div>
        <div className="flex flex-col gap-2 md:basis-1/3 basis-1">
          <span className="text-6xl sm:text-7xl">15+</span>
          <span className="text-2xl">Classrooms</span>
        </div>
      </div>
      <div className="flex justify-center mt-6 w-full">
        <button className="bg-transparent border border-secondary w-1/3 h-12 p-3 rounded-full whitespace-nowrap">
          View Full Demography
        </button>
      </div>
    </div>
  );
};

export default Feature;
