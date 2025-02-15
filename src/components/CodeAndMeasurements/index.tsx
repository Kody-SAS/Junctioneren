import { InterUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import CButton from "../ui/Button";
import Image from "next/image";
import images from "../../../public/imgs";

const CodeAndMeasurements = () => {
  const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);
  return (
    <section className="my-[20px] lg:my-[46px]">
      <div className="container mx-auto">
        <div className="bg-[#F8F8F8] rounded-[46px] p-[20px] lg:p-[54px]">
          <div className="flex flex-col lg:flex-row">
            <div>
              <h3
                className={`${fontClass} font-normal text-[25px] sm:text-[36px] xl:text-[48px] leading-[35px] sm:leading-[50px] xl:leading-[58.08px] tracking-[0%] w-full lg:w-[570px] xl:w-[892px] text-center lg:text-left`}
              >
                Responsability, Trust, Transparency, Competance, client
                satisfaction
              </h3>
              <p
                className={`pt-[6px] ${fontClass} font-light text-[12px] sm:text-[14px] lg:text-[16px] leading-[19.36px] tracking-[0%] lg:w-[560px] xl:w-[736px] text-center lg:text-left`}
              >
                Chez Junctioner Construction Engineering, nous avons construit
                nos valeurs sur les piliers du secteur de la construction
              </p>
              <div className="mt-[18px] flex flex-col lg:flex-row lg:space-x-[24px] space-y-[10px] lg:space-y-0">
                <CButton
                  icon={
                    <Image
                      src={images.ArrowLong01}
                      alt="icon"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="bg-[#312783] text-white rounded-[15px] w-full lg:w-[260px] h-[36px] lg:h-[42px]"
                >
                  Contact us now
                </CButton>
                <CButton
                  icon={
                    <Image
                      src={images.ArrowLong02}
                      alt="icon"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="bg-white text-[#656565] rounded-[15px] w-full lg:w-[260px] h-[36px] lg:h-[42px]"
                >
                  See our services
                </CButton>
              </div>
            </div>
            <div className="flex flex-col pt-[12px] lg:pt-0">
              <p
                className={`${fontClass} font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[19.36px] tracking-[0%] text-center lg:text-right w-full`}
              >
                The Junctioners
              </p>
              <div className="relative h-[73px] my-[17px]">
                <div className="absolute w-[73px] h-[73px] bg-[#C0C0C0] rounded-full right-0 top-0 z-10"></div>
                <div className="absolute w-[73px] h-[73px] bg-[#C0C0C0] rounded-full right-[50px] top-0 z-20"></div>
                <div className="absolute w-[73px] h-[73px] bg-[#C0C0C0] rounded-full right-[100px] top-0 z-30"></div>
                <div className="absolute w-[73px] h-[73px] bg-[#C0C0C0] rounded-full right-[150px] top-0 z-40"></div>
              </div>
              <p
                className={`${fontClass} font-normal text-[10px] sm:text-[11px] lg:text-[12px] leading-[13px] sm:leading-[16px] lg:leading-[19.36px] tracking-[0%] text-center lg:text-right`}
              >
                The expert team brings a wealth of knowledge and creativity to
                every project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeAndMeasurements;
