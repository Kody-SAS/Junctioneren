import Image from "next/image";
import Menu from "../ui/Menu";
import images from "../../../public/imgs";
import Form from "../Form";
import SlideUp from "../Animation/SlideUp";

const ContactUs = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto lg:my-[95px]">
      <SlideUp delay={0.3}>
        <div className="container mx-auto">
          <Menu title="Contact Us" titleLink="" path="#" />
          <div className="grid grid-cols-12 lg:mt-[22px] gap-[10px] sm:gap-[20px] lg:gap-[30px] h-[369px]">
            <div className="w-full col-span-12 lg:col-span-5 flex flex-col space-y-[10px]">
              <Form text="Name" />
              <Form text="Phone Number*" />
              <Form text="Email" />
              <Form text="interested in" />
              <Form textarea text="Message*" />
            </div>
            <div className="w-full col-span-12 lg:col-span-7 h-full hidden lg:flex">
              <Image
                src={images.ContactImg}
                alt="picture"
                className="relative object-cover lg:w-[749px] lg:h-[369px] rounded"
              />
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default ContactUs;
