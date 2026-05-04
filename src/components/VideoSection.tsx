"use client";

export function VideoSection() {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Company <span className="text-[#90caf8]">Overview</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#90caf8] mx-auto mt-3" />
        </div>

        <div className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10">
          <video
            controls
            poster="https://28534886.s142i.faiusr.com/2/AI4BCObQzQ0QAhgAIJfxxsMGKOje2IACMIAPOLgI.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://28534886.s21v.faiusr.com/58/ABUIABA6GAAgjvHGwwYolNXn9wI.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
