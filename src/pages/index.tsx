import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurProjects from "@/components/OurProject";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <div className="relative bg-red-500  z-50 top-0 left-0"></div>
      <Banner />
      <CodeAndMeasurements />
      <WhatWeDo />
      <OurProjects />
      <WhoWeAre />
      <ContactUs />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
