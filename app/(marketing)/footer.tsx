import { Button } from "@/components/ui/button";
import Image from "next/image";
import { flags } from "../../lib/flagInfo";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map((f, i) => (
          <Button size="lg" variant="ghost" className="w-full">
            <Image
              className="mr-4 rounded-md"
              src={f.flag}
              alt={f.flagName}
              height={32}
              width={40}
              key={i}
            />
            {f.flagName}
          </Button>
        ))}
      </div>
    </footer>
  );
};
