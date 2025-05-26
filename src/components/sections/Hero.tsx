const Hero = () => {
  return (
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
  );
};

export default Hero;
