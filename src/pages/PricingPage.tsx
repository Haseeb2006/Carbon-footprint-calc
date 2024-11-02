import React from 'react';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        'Up to 5 video uploads per month',
        'AI-generated summaries',
        'Basic quizzes',
        'Limited analytics',
      ],
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: [
        'Unlimited video uploads',
        'Advanced AI summaries',
        'Customizable quizzes',
        'Detailed performance analytics',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security features',
        'Custom AI model training',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'border-4 border-blue-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;