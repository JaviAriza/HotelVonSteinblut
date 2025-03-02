import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Where is Hotel Von Steinblut located?',
      answer: 'Hotel Von Steinblut is situated in a grand medieval castle deep in the Carpathian forest, surrounded by nature and an aura of mystery. It is the perfect place for a unique and magical getaway.'
    },
    {
      question: 'What kind of experiences does the hotel offer?',
      answer: 'Our vampire-themed hotel offers an immersive experience including accommodation in gothic-styled rooms, themed dinners with performances at the Sangre de la Noche restaurant, and the thrilling escape room The Crypt, featuring three different experiences to choose from.'
    },
    {
      question: 'What themes does The Crypt escape room have?',
      answer: 'The Crypt offers three experiences:\n- The Lady of the Night: A vampire story starring an enigmatic pale woman with red eyes.\n- The Curse of the Werewolf: An action-packed adventure about a werewolf curse.\n- The Crypt Investigators: A lighter experience, perfect for all audiences, where a group of investigators must solve mysteries in a crypt.'
    },
    {
      question: 'Is the hotel suitable for families with children?',
      answer: 'Yes, Hotel Von Steinblut offers options for all audiences. While some experiences, like the themed dinner and certain escape room stories, are designed for adults, we also have lighter experiences such as The Crypt Investigators, which are perfect for families.'
    },
    {
      question: 'Is it necessary to book in advance?',
      answer: 'Yes, we recommend booking in advance, especially for the Sangre de la Noche restaurant and The Crypt escape room, as they are highly demanded experiences with limited availability.'
    },
    {
      question: 'Are there vegetarian or vegan options at the restaurant?',
      answer: 'Yes, our restaurant offers vegetarian and vegan options on our themed menu. Please inform us of any dietary requirements when making your reservation.'
    },
    {
      question: 'Is the hotel accessible for people with reduced mobility?',
      answer: 'Hotel Von Steinblut, being located in a medieval castle, has some areas with accessibility limitations. However, we have adapted rooms and common areas. Please contact us so we can ensure a comfortable stay.'
    },
    {
      question: 'Are pets allowed?',
      answer: 'Unfortunately, we do not allow pets in the hotel due to the thematic nature and experiences we offer.'
    },
    {
      question: 'What should I bring for my stay?',
      answer: 'We recommend bringing comfortable clothing and suitable footwear for exploring the surrounding forest. For themed dinners, you may dress elegantly or even in vampire-inspired outfits if you wish.'
    },
    {
      question: 'How can I contact the hotel for more information?',
      answer: 'You can contact us through our website contact form, via email at info@vonsteinblut.com, or by calling +40 123 456 789. We will be happy to assist you.'
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6 mt-15 text-white mb-15">Frequently Asked Questions - Hotel Von Steinblut</h2>
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740335763/Ornament1_ogcwyx.png"
        alt="Filigrana"
        className="mx-auto w-90 mt-[-50px]"
      />
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-6"
          >
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800"
              onClick={() => toggleAnswer(index)}
            >
              <div className='text-2xl text-white'>{faq.question}</div>
              <span className="text-2xl text-red-800">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-gray-300 text-lg">
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
