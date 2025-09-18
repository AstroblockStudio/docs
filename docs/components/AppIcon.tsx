import { EarthIcon, Globe } from "lucide-react";

type Type = "browser" | "baseapp" | "farcaster";

export const InnerAppIcon = ({ type }: { type: Type }) => {
  if (type === "browser") {
    return <Globe className="w-full h-full stroke-black" />;
  } else if (type === "baseapp") {
    return (
      <div className="p-2 bg-white rounded-md">
        <img src="/baseapp.png" alt="baseapp" />
      </div>
    );
  } else if (type === "farcaster") {
    return <img src="/fc.png" alt="farcaster" />;
  } else {
    return null;
  }
};

export const AppIcon = ({ type }: { type: Type }) => {
  const names = {
    browser: "Browser",
    baseapp: "The Base App",
    farcaster: "Farcaster",
  };
  return (
    <div className="flex items-center bg-gray-300 justify-center gap-2 border rounded-md p-2">
      <div className="w-10 h-10">
        <InnerAppIcon type={type} />
      </div>
      <span className="font-bold">{names[type]}</span>
    </div>
  );
};
