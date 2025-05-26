import { useState } from "react";
import { services } from "@/data/services";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-16">
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
              Services
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h3 className="text-3xl lg:text-4xl font-light leading-tight mb-8">
              Комплексный подход к цифровой трансформации
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 border cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-light mb-3">{service.title}</h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeService === index
                        ? "text-neutral-300"
                        : "text-neutral-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`text-xs uppercase tracking-wide ${
                        activeService === index
                          ? "text-neutral-400"
                          : "text-neutral-500"
                      }`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
