import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <Hero />
      <Work />
      <Services />

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
