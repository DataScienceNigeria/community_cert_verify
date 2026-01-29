"use client";

import Image from "next/image";
import { Programs } from "./LandingText";

function ProgramsCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Learn More About Our Communities
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Discover our growing communities designed to empower learning,
          innovation, and collaboration.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Programs.map((card: any, index: number) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={card.image}
                alt={card.heading}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {card.heading}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {card.smallText}
              </p>

              <details className="mt-4 text-sm text-gray-700">
                <summary className="cursor-pointer font-medium text-green-600 hover:underline">
                  Read more
                </summary>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {card.bigText}
                </p>
              </details>

              {/* Accent line */}
              <div
                className="mt-6 h-1 w-16 rounded-full"
                style={{ backgroundColor: card.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsCards;
