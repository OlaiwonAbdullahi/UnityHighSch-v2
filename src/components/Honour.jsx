import Dapo from "../assets/Dapo.jpg";
import DeputyGov from "../assets/DeputyGov.jpeg";
import Arigbabu from "../assets/Arigbabu.jpg";

const Honour = () => {
  return (
    <div className="mt-7">
      <h2 className=" text-center my-4 text-4xl font-medium font-titalium">
        Honour <span className="text-secondary">Section</span>
      </h2>
      <div className=" flex flex-wrap gap-4 justify-center">
        <div className="basis-1/2 sm:basis-1/4 text-center flex flex-col justify-center">
          <img
            src={Dapo}
            alt="Dapo Abiodun"
            className="h-32 w-48 mx-auto rounded-lg"
          />
          <h2 className="text-lg font-titalium font-semibold">
            His Excellency Prince Dapo Abiodun MFR
          </h2>
          <span className="text-sm font-poppins">Governor Of Ogun State</span>
        </div>

        <div className="basis-1/2 sm:basis-1/4 text-center flex flex-col justify-center">
          <img
            src={DeputyGov}
            alt="Dapo Abiodun"
            className="h-32 w-48 mx-auto rounded-lg"
          />
          <h2 className="text-lg font-titalium font-semibold">
            Engr. Noimot Salako-Oyedele
          </h2>
          <span className="text-sm font-poppins">
            Deputy-Governor Of Ogun State
          </span>
        </div>

        <div className="basis-1/2 sm:basis-1/4 text-center flex flex-col justify-center">
          <img
            src={Arigbabu}
            alt="Dapo Abiodun"
            className="h-32 w-48 mx-auto rounded-lg"
          />
          <h2 className="text-lg font-titalium font-semibold">
            Prof. Abayomi Arigbabu
          </h2>
          <span className="text-sm font-poppins">
            Comissioner For Education, Ogun State
          </span>
        </div>

        <div className="basis-1/2 sm:basis-1/4 text-center flex flex-col justify-center">
          <img
            src="https://placehold.co/600x400"
            alt="Dapo Abiodun"
            className="h-32 w-48 mx-auto rounded-lg"
          />
          <h2 className="text-lg font-titalium font-semibold">
            Mr Adeeko Adeoye
          </h2>
          <span className="text-sm font-poppins">
            {" "}
            Immediate Past Principal
          </span>
        </div>
      </div>
    </div>
  );
};

export default Honour;
