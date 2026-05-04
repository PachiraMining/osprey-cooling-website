import Image from "next/image";

interface TeamMember {
  name: string;
  role: string | null;
  src: string;
  isManager?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "David Mo",    role: "Manager", src: "/osprey-cooling-website/images/team-david.webp", isManager: true },
  { name: "Joy Liao",   role: null,       src: "/osprey-cooling-website/images/team-joy.webp" },
  { name: "Vince Chen", role: null,       src: "/osprey-cooling-website/images/team-vince.webp" },
  { name: "Zeng Zuming",role: null,       src: "/osprey-cooling-website/images/team-zeng.webp" },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circular photo with optional Manager badge */}
      <div className="relative">
        <div
          className="relative rounded-full overflow-hidden border-2 border-[#64B5F6]/40"
          style={{ width: "100px", height: "100px" }}
        >
          <Image
            src={member.src}
            alt={member.name}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>
        {member.isManager && (
          <span
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#64B5F6] text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap"
            style={{ fontSize: "10px" }}
          >
            Manager
          </span>
        )}
      </div>
      {/* Name */}
      <span className="text-white text-sm text-center">{member.name}</span>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="w-full py-14" style={{ background: "linear-gradient(135deg, #1a2340 0%, #212121 60%, #1a2340 100%)" }}>
      <div
        className="mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16"
        style={{ maxWidth: "1200px" }}
      >
        {/* Left side: 7*24 support info */}
        <div className="flex flex-col items-center md:items-start gap-6 md:flex-1">
          {/* Icon + heading */}
          <div className="flex items-center gap-5">
            <div
              className="relative flex-none"
              style={{ width: "80px", height: "80px" }}
            >
              <Image
                src="/osprey-cooling-website/images/team-support-icon.webp"
                alt="24/7 support icon"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div>
              <div
                className="text-[#64B5F6] font-bold leading-none"
                style={{ fontSize: "36px" }}
              >
                7*24
              </div>
              <div
                className="text-white font-semibold tracking-widest mt-1"
                style={{ fontSize: "13px", letterSpacing: "0.12em" }}
              >
                ANY TIME ANY PLACE
              </div>
            </div>
          </div>

          {/* Bullet points */}
          <ul className="flex flex-col gap-3">
            {[
              "7 * 24-hour online",
              "Quickly obtain quotes",
              "Professional technical",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#dedede] text-sm">
                <span
                  className="flex-none w-2 h-2 rounded-full bg-[#64B5F6]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px self-stretch bg-white/10" />

        {/* Right side: team member circles */}
        <div className="flex flex-wrap justify-center gap-8 md:flex-none md:flex-row md:flex-nowrap">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
