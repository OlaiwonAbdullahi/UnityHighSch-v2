const Welcome = () => {
  return (
    <div className="mt-8 border-l-4 border-l-secondary rounded-lg p-5 w-11/12 md:w-2/3 mx-auto bg-white shadow-lg flex flex-col justify-center text-left h-72">
      <p className="text-start font-poppins text-gray-700 leading-relaxed">
        Welcome to our online learning platform. At our institution, we
        prioritize not only academic achievement but also the development of
        strong moral character. Here, we believe in shaping well-rounded
        individuals who contribute meaningfully to society. Explore our website
        to discover the values that drive us and the educational opportunities
        that await you.
      </p>
      <i className="self-end font-light text-gray-600 mt-4">
        - Mr. Akinbode T Daniel, Principal Unity High School
      </i>
    </div>
  );
};

export default Welcome;
