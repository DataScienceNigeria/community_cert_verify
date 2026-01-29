"use client";

import { CardText } from "./LandingText";

function VerificationFlow() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How to Verify Your Certificate
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Follow these simple steps to verify certificates quickly and securely.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {CardText.map((card: any, index: number) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-dsn text-white flex items-center justify-center font-bold shadow-md">
              {index + 1}
            </div>

            {/* Icon */}
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
              style={{ backgroundColor: card.color + "20" }}
            >
              <div className="text-2xl" style={{ color: card.color }}>
                {card.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {card.subtitle}
            </p>

            {/* Accent */}
            <div
              className="mt-6 h-1 w-16 rounded-full"
              style={{ backgroundColor: card.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerificationFlow;
