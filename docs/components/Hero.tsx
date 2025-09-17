import { useEffect, useState } from "react";
import teams from "../public/teams.json";

export const Hero = () => {
  const [images] = useState<string[]>(teams.map((t) => t.shipImage));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Generate random animation properties for each ship
  const getRandomAnimationProps = (index: number) => {
    // Responsive duration: faster on mobile, slower on desktop
    const baseDuration = isMobile ? 6 : 15;
    const durationVariation = isMobile ? 4 : 12;
    const duration = baseDuration + Math.random() * durationVariation;

    const delay = Math.random() * -10; // Random delay between 0 to -10 seconds
    const topPosition = Math.random() * 90; // Random vertical position (0-90%)

    return {
      duration: `${duration}s`,
      delay: `${delay}s`,
      top: `${topPosition}%`,
    };
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
      {/* Animated crossing ships */}
      <div className="absolute inset-0">
        {images.map((image, index) => {
          const animationProps = getRandomAnimationProps(index);

          return (
            <div
              key={index}
              className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-cross-left"
              style={{
                top: animationProps.top,
                animationDuration: animationProps.duration,
                animationDelay: animationProps.delay,
              }}
            >
              <div className="absolute inset-0 opacity-35 rounded-3xl blur-md bg-blue-600"></div>
              <img
                src={image}
                alt={`Ship ${index + 1}`}
                className="w-full h-full object-contain rotate-90 hover:opacity-100 transition-opacity"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
