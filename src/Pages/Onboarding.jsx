import React from "react";
import Step1 from "../assets/6.svg";
import Step2 from "../assets/3.svg";
import Step3 from "../assets/5.svg";
import Step4 from "../assets/4.svg";

const steps = [
  {
    id: 1,
    title: "Submit Project Details",
    description:
      "Provide us with your project requirements, including your goals, expected features, and budget. We gather all the information to tailor the perfect solution for you.",
    image: Step1,
  },
  {
    id: 2,
    title: "Receive a Quote Within 2 Hours",
    description:
      "We carefully assess your project and, within 6 hours, deliver a detailed quote. The quote outlines the project scope, timeline, and costs for your review.",
    image: Step2,
  },
  {
    id: 3,
    title: "Agree to Terms",
    description:
      "Review the quote and once you are satisfied, agree to the terms. After signing the agreement, proceed with the initial payment to kickstart the project.",
    image: Step3,
  },
  {
    id: 4,
    title: "Project Delivery & Approval",
    description:
      "We complete the project and deliver the final product or service to you for approval. Upon your satisfaction, the project is considered complete.",
    image: Step4,
  },
];

const Onboarding = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Onboarding Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined process designed to make working with us effortless.
            From the first step to final delivery, we ensure transparency,
            clarity, and collaboration.
          </p>
        </div>

        {/* Timeline style steps */}
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 relative ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 relative z-10 hover:shadow-xl transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold shadow-lg">
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0 z-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-40 h-40 md:w-52 md:h-52"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
