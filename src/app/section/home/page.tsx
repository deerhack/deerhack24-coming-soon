
import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/app/assets/icons/Hero";
import HeroPhone from "@/app/assets/icons/Hero"
import { cabinetBold } from "@/app/utils/fonts";

export default function Hero() {
  return (
    <div className=" flex flex-column justify-center object-contain bg-dark-purple ">
        <div className=" w-screen h-screen overflow-hidden object-fill border border-black">
            <HeroIcon className="sm:hidden md:hidden lg:block"/>
            <HeroPhone className="lg:hidden md:block sm:block" />
        </div>
      
      <div className="absolute gap-[25px] top-[80px] flex flex-col text-center ">
        <MainLogo className="w-fit h-fit"/>
        <p
          className={`text-3xl font-extrabold text-secondary ${cabinetBold.className}`}
        >
          Coming Soon
        </p>
      </div>
    </div>
  );
};

