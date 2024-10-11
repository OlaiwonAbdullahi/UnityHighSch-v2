import React from "react";
import { BiHome } from "react-icons/bi";

const AboutIntro = () => {
  return (
    <div className="font-titalium">
      <div className="bg-[url('./assets/aboutbg.png')] h-60 text-white uppercase text-xs ">
        <p className=" py-20 px-10  capitalize">
          <BiHome color="white" className="text-base inline" />
          Home / About Us
          <br />
          <br />
          <br />
          <span className="text-xl uppercase">about us</span>
        </p>
      </div>

      <br />
      <br />
      <br />

      <div className="flex flex-col w-full px-7 lg:flex-row justify-center">
        <div className="w-full   lg:w-1/2">
          <h3 className="uppercase font-bold text-3xl self-start">
            <span className="border-b-4 border-secondary">abo</span>ut us
          </h3>
          <br />
          <p className=" text-center font-poppins">
            Unity High School,Ijoko-ota, formerly known and called Ijoko High
            School was established on the 26th of September,1980 by the Ogun
            state Government in fulfilment of one of the cardinal programmes of
            the Government in power then,which was free Education programme at
            all levels.The school started in two classrooms given her
            temporarily at Nawar-ru-deen primary school,Ijoko-ota with about 120
            students (69 male & 51 Female).The pioneer teachers were Messer's
            G.K Appiah Boateng,M.S Ajadi,Oloyede and Ogunbiyi A.A.A. with O.A
            Martins (now Chief(Mrs)O.A Sobande as the principal. In November
            1980,the school. The effort of the following individuals and
            organization who have helped the school must be mentioned:The
            improvement Union and Afimo Descendants Union . The West African
            Examination Council recognition Inspection was conducted in 1984 and
            the first set of candidates was presented for the West African
            School Certificate with diligent male and female Teachers. It is
            noteworthy to say this school has been divided into two in the year
            2006, handled by different Principals, Vice-principals and PTA
            Executives.Unity High School,Ijoko-ota, formerly known and called
            Ijoko High School was established on the 26th of September,1980 by
            the Ogun state Government in fulfilment of one of the cardinal
            programmes of the Government in power then,which was free Education
            programme at all levels.The school started in two classrooms given
            her temporarily at Nawar-ru-deen primary school,Ijoko-ota with about
            120 students (69 male & 51 Female).The pioneer teachers were
            Messer's G.K Appiah Boateng,M.S Ajadi,Oloyede and Ogunbiyi A.A.A.
            with O.A Martins (now Chief(Mrs)O.A Sobande as the principal. In
            November 1980,the school. The effort of the following individuals
            and organization who have helped the school must be mentioned:The
            improvement Union and Afimo Descendants Union . The West African
            Examination Council recognition Inspection was conducted in 1984 and
            the first set of candidates was presented for the West African
            School Certificate with diligent male and female Teachers. It is
            noteworthy to say this school has been divided into two in the year
            2006, handled by different Principals, Vice-principals and PTA
            Executives.
          </p>
        </div>

        {/* <div>
            <img src="https://placehold.co/" alt="About Image" className='w-100%    lg:h-fit mx-28 my-14'/>
      </div> */}
      </div>
    </div>
  );
};

export default AboutIntro;
