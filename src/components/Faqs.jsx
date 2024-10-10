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
            <CiCircleMinus className="h-6 w-6 text-secondary" />
          ) : (
            <CiCirclePlus className="h-6 w-6 text-secondary" />
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
      question: "How can I contact the school office?",
      answer:
        "You can reach the school office at +234 806 596 5321 or uhsijokoota@gmail.com during office hours.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "Explore our Extracurriculars page to discover the range of activities available, from sports to clubs and special interest groups.",
    },
    {
      question: "How do I access my child's grade and attendance information?",
      answer:
        "Parents can access our online portal, OGSERA, to view real-time information on grades and attendance.",
    },
    {
      question: "How can I stay updated on school events?",
      answer:
        "Subscribe to our newsletter on the homepage and follow us on our social media handles for the latest updates.",
    },
  ];

  return (
    <div className="faq-accordion w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-5">
        <h2 className="text-center text-text font-titalium text-4xl font-medium leading-normal">
          Questions we get the <span className="text-secondary"> most</span>
        </h2>
        <span className="text-center text-sm font-poppins">
          We have great answers to all the questions you may ask.
        </span>
      </div>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
