export function AboutSection() {
  const features = [
    {
      image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAglaPXwwYo7LKPNzCcCjikCQ.jpg",
      title: "R&D Capability",
      desc: "Professional R&D team with years of experience in cooling technology",
    },
    {
      image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYo98mT2AMwnAo4pAk.jpg",
      title: "Manufacturing",
      desc: "State-of-the-art production lines with strict quality control",
    },
    {
      image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYogL2ujQEwnAo4pAk.jpg",
      title: "Quality Assurance",
      desc: "ISO certified quality management system ensures product reliability",
    },
    {
      image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgxY-YwwYo1cWJgwYwnAo4pAk.jpg",
      title: "Global Service",
      desc: "Worldwide shipping with professional after-sales support",
    },
  ];

  return (
    <section id="about" className="bg-[#151515] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            About <span className="text-[#90caf8]">Osprey Technology</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#90caf8] mx-auto mt-3" />
          <p className="text-white/50 text-sm mt-4 max-w-2xl mx-auto">
            Osprey Technology Co., Ltd is a professional manufacturer
            specializing in computer accessories, PC cases and cooling system solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 group hover:border-[#90caf8]/30 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-base">{f.title}</h3>
                <p className="text-white/50 text-xs mt-2 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
