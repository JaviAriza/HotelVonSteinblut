import React, { useState } from 'react';

// FAQ Component
const FAQ = () => {
  // State to track the active question
  const [activeIndex, setActiveIndex] = useState(null);

  // List of questions and answers
  const faqs = [
    {
      question: 'What are the check-in and check-out times?',
      answer: 'Check-in is from 3:00 PM to 10:00 PM, and check-out is by 12:00 PM.'
    },
    {
      question: 'Does the hotel offer airport transportation?',
      answer: 'Yes, we offer airport shuttle service for an additional fee. Please contact the front desk for details.'
    },
    {
      question: 'Are pets allowed in the hotel?',
      answer: 'No, pets are not allowed in the hotel.'
    },
    {
      question: 'Is there free Wi-Fi in the hotel?',
      answer: 'Yes, we provide free Wi-Fi throughout the hotel.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we offer free parking for all our guests.'
    },
    {
      question: 'Can I request an early check-in or late check-out?',
      answer: 'Early check-in or late check-out can be requested, subject to availability. Please contact us in advance.'
    },
    {
      question: 'Does the hotel have a restaurant?',
      answer: 'Yes, the hotel has an on-site restaurant offering a variety of delicious meals.'
    },
    {
      question: 'Is there a gym in the hotel?',
      answer: 'No, the hotel does not have a gym.'
    },
    {
      question: 'Can I book tours or excursions at the hotel?',
      answer: 'Yes, the front desk can assist you with booking local tours and excursions.'
    }
  ];

  // Function to toggle the answer visibility
  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Hide answer if the same question is clicked
    } else {
      setActiveIndex(index); // Show answer for the clicked question
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-gray-600 text-sm">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
