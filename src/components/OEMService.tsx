import { cn } from "@/lib/utils";

interface ServiceCard {
  label: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
}

function CustomizationLogoIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="28" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="17" cy="20" r="4" stroke={color} strokeWidth="2" fill="none" />
      <path d="M6 32 L14 24 L20 30 L28 20 L42 34" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M32 10 L42 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M37 6 L37 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ParameterIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24 L18 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M30 24 L40 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2" fill="none" />
      <path d="M8 14 L26 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M38 14 L40 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="14" r="4" stroke={color} strokeWidth="2" fill="none" />
      <path d="M8 34 L14 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M26 34 L40 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="34" r="4" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

function PackagingIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6 L40 14 L40 34 L24 42 L8 34 L8 14 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M24 6 L24 42" stroke={color} strokeWidth="2" />
      <path d="M8 14 L24 22 L40 14" stroke={color} strokeWidth="2" />
      <path d="M16 10 L32 18" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

function MoldDrawingIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <path d="M14 16 L34 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 22 L28 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 28 L24 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="30" r="5" stroke={color} strokeWidth="2" fill="none" />
      <path d="M38 34 L42 38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LogisticsIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="18" width="26" height="18" rx="1" stroke={color} strokeWidth="2" fill="none" />
      <path d="M30 22 L38 22 L44 30 L44 36 L30 36 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="38" r="4" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="36" cy="38" r="4" stroke={color} strokeWidth="2" fill="none" />
      <path d="M8 18 L8 12 L24 12 L24 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhotoVideoIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="28" height="22" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <path d="M32 16 L44 12 L44 30 L32 26 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="14" cy="36" r="4" stroke={color} strokeWidth="2" fill="none" />
      <path d="M18 36 L30 36 L34 40 L44 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const serviceCards: ServiceCard[] = [
  {
    label: "Customization of Logo",
    color: "#ff4444",
    borderColor: "border-red-500",
    icon: null,
  },
  {
    label: "Parameter Customization",
    color: "#ff8800",
    borderColor: "border-orange-500",
    icon: null,
  },
  {
    label: "Customization of Packaging",
    color: "#00cc44",
    borderColor: "border-green-500",
    icon: null,
  },
  {
    label: "Mold Drawing Design",
    color: "#00cccc",
    borderColor: "border-cyan-500",
    icon: null,
  },
  {
    label: "Brand Logistics warehousing",
    color: "#aa44ff",
    borderColor: "border-purple-500",
    icon: null,
  },
  {
    label: "Provide product Photos and videos",
    color: "#4488ff",
    borderColor: "border-blue-500",
    icon: null,
  },
];

const iconComponents = [
  CustomizationLogoIcon,
  ParameterIcon,
  PackagingIcon,
  MoldDrawingIcon,
  LogisticsIcon,
  PhotoVideoIcon,
];

export function OEMService() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "#1a1a2e", fontFamily: "'Microsoft YaHei', sans-serif" }}
    >
      {/* Decorative background dots/crosses pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative cross accents */}
      <div className="absolute top-8 left-8 text-white opacity-20 text-2xl font-thin select-none">✦</div>
      <div className="absolute top-12 left-16 text-white opacity-10 text-lg font-thin select-none">+</div>
      <div className="absolute bottom-8 right-8 text-white opacity-20 text-2xl font-thin select-none">✦</div>
      <div className="absolute bottom-12 right-16 text-white opacity-10 text-lg font-thin select-none">+</div>
      <div className="absolute top-1/2 left-4 text-white opacity-10 text-lg font-thin select-none">+</div>
      <div className="absolute top-1/3 right-4 text-white opacity-10 text-lg font-thin select-none">+</div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Title with decorative arrows */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4">
            <span className="text-white opacity-50 text-2xl">◄◄</span>
            <h2
              className="text-white font-bold"
              style={{ fontSize: "32px", letterSpacing: "2px" }}
            >
              OEM Service
            </h2>
            <span className="text-white opacity-50 text-2xl">►►</span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="text-center mb-12"
          style={{ color: "#aaaaaa", fontSize: "14px" }}
        >
          We are able to offer highly specific solutions which cant be satisfied by existing devices on the market
        </p>

        {/* Service cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCards.map((card, index) => {
            const IconComponent = iconComponents[index];
            const color = card.color;
            return (
              <div
                key={card.label}
                className={cn(
                  "flex flex-col items-center justify-center gap-3 p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105",
                  card.borderColor
                )}
                style={{
                  border: `1px solid ${color}`,
                  boxShadow: `0 0 10px ${color}33, inset 0 0 10px ${color}11`,
                  backgroundColor: `${color}0a`,
                  minHeight: "140px",
                }}
              >
                <div
                  style={{
                    filter: `drop-shadow(0 0 6px ${color})`,
                  }}
                >
                  <IconComponent color={color} />
                </div>
                <span
                  className="text-center font-medium leading-tight"
                  style={{ color: "#ffffff", fontSize: "13px" }}
                >
                  {card.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
