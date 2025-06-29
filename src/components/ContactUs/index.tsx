import Image from "next/image";
import Menu from "../ui/Menu";
import images from "../../../public/imgs";
import Form from "../Form";
import SlideUp from "../Animation/SlideUp";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { fontClassRoboto } from "@/pages/who-we-are";
import { useTranslation } from "next-i18next";

const ContactUs = () => {
  const { t } = useTranslation("common");
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[891px] lg:mx-auto lg:my-[95px] px-4 lg:px-0">
      <SlideUp delay={0.3}>
        <div className="mx-auto">
          <Menu title={t("contact.title")} titleLink="" path="#" />
          <div className="grid grid-cols-12 lg:mt-[22px] gap-[10px] sm:gap-[20px] lg:gap-[30px] h-[369px]">
            <div className="w-full col-span-12 lg:col-span-5 flex flex-col space-y-[10px]">
              <Form text={t("contact.name")} />
              <Form text={t("contact.phone")} />
              <Form text={t("contact.email")} />
              <Form text={t("contact.intrs")} />
              <Form textarea text={t("contact.msg")} />
            </div>
            <div className="w-full col-span-12 lg:col-span-7 h-full hidden lg:flex">
              <Image
                src={images.ContactImg}
                alt="picture"
                className="relative object-cover lg:w-[749px] lg:h-[369px] rounded"
              />
            </div>
          </div>
          <div className="mt-[20px] lg:mt-[50px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-[50px]">
            {/* Send Email Button */}
            <button
              className={`flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#4a3b9d] ${fontClassRoboto}`}
            >
              {t("contact.send")}
              <span className="pl-[4px]">
                <FaArrowRight />
              </span>
            </button>

            {/* WhatsApp Button */}
            <div
              className="rounded-full bg-[#F3F3F3] px-[25px] py-[6px] text-center flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-[#e0e0e0]"
              onClick={() =>
                window.open("https://wa.me/+237695977562", "_blank")
              }
            >
              <FaWhatsapp color="green" size={27} className="mr-[14px]" />
              <p className="text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium">
                {t("contact.contact")}
              </p>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default ContactUs;
