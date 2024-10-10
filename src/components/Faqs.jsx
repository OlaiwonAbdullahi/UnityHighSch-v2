import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item border-b">
      <div
        className="faq-question cursor-pointer py-4 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold font-titalium">{question}</h3>
        <span>
          {isOpen ? (
            <CiCircleMinus className=" h-6 w-6 text-secondary" />
          ) : (
            <CiCirclePlus className=" h-6 w-6 text-secondary" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="faq-answer py-2">
          <p className="text-gray-600 font-poppins text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Accordion component
const FAQAccordion = () => {
  const faqData = [
    {
      question: "What are the school's operating hours?",
      answer:
        "The school operates from 7:00AM to 2:00PM on regular school days.",
    },
    {
      question: "How can i contact the school office?",
      answer:
        " You can reach the school office at +234 806 596 5321or uhsijokoota@gmail.com during office hours.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "Explore our Extracurriculars page to discover the range of activities available, from sports to clubs and special interest groups.",
    },

    {
      question: " How do i acess my child grade and attendance infomation?",
      answer:
        "Parent Can Access our Online portal,OGSERA,to Access Real-time Information on grade and Attendance.",
    },
    {
      question: " How can i stay updated to the school event?",
      answer:
        "Subscribe to our NewsLetter on The Homepage And Follow us On Our Social Media Handles for the latest Update.",
    },
  ];

  return (
    <div className="faq-accordion w-2/3 max-w-lg mx-auto p-4">
      <div className=" text-center mb-5">
        <h2 className="text-center text-text font-titalium text-4xl font-medium leading-normal ">
          Questions we get the <span className=" text-secondary"> most</span>
        </h2>
        <span className="text-center text-sm font-poppins">
          We Have Great Answer To All The Questions You Have To Ask
        </span>
      </div>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
