import BentoDemo from "@/app/components/feature-grid"
import Navbar from "./components/navbar";
import ShopLottie from "./components/shoplottie";
import MarqueeL from "./components/marquee";
import FooterComponent from "./components/footer";
import GradualSpacing from "@/components/ui/gradual-spacing";

const title = [
  { text: "OneDock by IBITF.", className: "text-green-600 dark:text-gray-500", },
];

const words = [
  { text: "Browse", },
  { text: "products", },
  { text: "with", },
  { text: "OneDock." },
];

export default function Home() {
  return (
    <div className="overflow-auto scrollbar-hide grid h-screen w-full">
      <Navbar />
      <main className="pl-56 pr-56 pt-16 pb-36" >
        <div className="flex justify-between items-center overflow-x-hidden">
          <div className="flex flex-col">
            <GradualSpacing
              className="text-3xl font-bold tracking-[-0.1em] text-green-600 dark:text-white md:text-7xl md:leading-[5rem]"
              text="OneDock by IBITF"
            />
            <GradualSpacing
              className="text-3xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-5xl md:leading-[4rem]"
              text="Browse products with OneDock."
            />
          </div>
          <div className="flex justify-center items-center">
            <ShopLottie />
          </div>
        </div>
        <br /><br />
        <BentoDemo /> <br /><br /><br />
        {/* <MarqueeL /> */}
      </main>
      <FooterComponent />
    </div>
  );
}
