import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Digital Strategy",
      description: "Комплексная стратегия цифрового развития для вашего бренда",
      features: ["Brand Identity", "User Research", "Market Analysis"],
    },
    {
      title: "Web Development",
      description: "Современные веб-решения с фокусом на производительность",
      features: [
        "React/TypeScript",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      title: "Design Systems",
      description: "Масштабируемые дизайн-системы для консистентного опыта",
      features: ["Component Libraries", "Documentation", "Style Guides"],
    },
  ];

  const projects = [
    {
      title: "FinTech Platform",
      category: "Digital Banking",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      title: "Healthcare Portal",
      category: "Medical Tech",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    },
    {
      title: "E-commerce Suite",
      category: "Retail Tech",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-mono text-sm font-medium">STUDIO.DIGITAL</div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a
                href="#work"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Work
              </a>
              <a
                href="#services"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight mb-8">
                Создаем цифровые
                <br />
                продукты нового
                <br />
                <span className="italic">поколения</span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                Мы специализируемся на разработке современных веб-приложений,
                дизайн-систем и цифровых стратегий для амбициозных компаний.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-16">
              <div className="space-y-6">
                <div className="border-l-2 border-neutral-900 pl-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Founded
                  </div>
                  <div className="font-mono">2020</div>
                </div>
                <div className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Projects
                  </div>
                  <div className="font-mono">150+</div>
                </div>
                <div className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Clients
                  </div>
                  <div className="font-mono">85+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-20 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-4">
                Selected Work
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h3 className="text-3xl lg:text-4xl font-light leading-tight">
                Проекты, которые определяют будущее цифрового взаимодействия
              </h3>
            </div>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-6 lg:gap-8 group"
              >
                <div className="col-span-12 lg:col-span-8">
                  <div className="aspect-[3/2] bg-neutral-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:pt-8">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">
                        {project.category} / {project.year}
                      </div>
                      <h4 className="text-2xl font-light">{project.title}</h4>
                    </div>
                    <button className="flex items-center space-x-2 text-sm hover:text-neutral-600 transition-colors">
                      <span>View Case Study</span>
                      <Icon name="ArrowUpRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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

      {/* About */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-8">
                About Studio
              </h2>
              <h3 className="text-3xl lg:text-4xl font-light leading-tight mb-8">
                Мы верим в силу хорошего дизайна и чистого кода
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Наша студия объединяет дизайнеров, разработчиков и стратегов,
                  которые создают цифровые продукты с безупречным
                  пользовательским опытом.
                </p>
                <p>
                  Мы не просто следуем трендам — мы создаем решения, которые
                  работают долгие годы и масштабируются вместе с вашим бизнесом.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="aspect-[4/3] bg-neutral-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-sm uppercase tracking-wide text-neutral-500 mb-8">
                Let's Talk
              </h2>
              <h3 className="text-3xl lg:text-4xl font-light leading-tight mb-8">
                Готовы создать что-то выдающееся?
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:hello@studio.digital"
                    className="font-mono hover:text-neutral-600 transition-colors"
                  >
                    hello@studio.digital
                  </a>
                </div>
                <div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+74951234567"
                    className="font-mono hover:text-neutral-600 transition-colors"
                  >
                    +7 495 123 45 67
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:pt-16">
              <div className="space-y-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wide">
                  Moscow, Russia
                </div>
                <div className="text-sm text-neutral-500">
                  Работаем по будням
                  <br />
                  10:00 — 19:00 MSK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="font-mono text-sm">© 2024 Studio Digital</div>
            <div className="flex space-x-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Careers
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
