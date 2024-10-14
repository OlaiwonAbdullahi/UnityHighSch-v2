import computer from "../assets/computer.jpg";
import teach from "../assets/teach.jpg";
import pic from "../assets/pic.jpg";
//import student from "../assets/student.jpg";
import studenttro from "../assets/studenttro.jpg";

const Pictures = () => {
  return (
    <div className="">
      <h2 className=" text-center my-4 text-4xl font-medium font-titalium">
        Photo <span className="text-secondary">Speaks</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-4">
        <img
          src={computer}
          alt="Computer"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={teach}
          alt="Teaching"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={pic}
          alt="Teaching 1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={studenttro}
          alt="Student"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={studenttro}
          alt="Student"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Pictures;
