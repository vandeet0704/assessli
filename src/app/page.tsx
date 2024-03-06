import { ContactForm } from "@/components/Form";
import { ModeToggle } from "@/components/mode-toggle";
import { NavMenu } from "@/components/nav";
import { Label } from "@/components/ui/label";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="relative z-10">
        <NavMenu />
      </div>
      <div className="hidden md:flex fixed inset-y-0 right-0 -z-1 items-center justify-end">
        <Image
          src="/background.svg"
          alt="bg"
          objectFit="cover"
          width={800}
          height={800}
          quality={100}
          className="z-0"
        />
      </div>
      <div className="p-12 md:p-18 lg:p-24 z-1 relative">
        <div className="flex flex-col items-start z-2">
          <Label className="text-base sm:text-xl font-light foreground-secondary z-2">still have questions?</Label>
          <Label className="text-5xl sm:text-6xl font-bold foreground-secondary z-2">Contact Us...</Label>
        </div>
        <div className="py-8 z-2 w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}