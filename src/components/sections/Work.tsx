import Icon from "@/components/ui/icon";
import { projects } from "@/data/projects";

const Work = () => {
  return (
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
            <div key={index} className="grid grid-cols-12 gap-6 lg:gap-8 group">
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
  );
};

export default Work;
