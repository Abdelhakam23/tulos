import OurCore from "@/components/OurCore";
import OurMission from "@/components/OurMission";
import OurNumbers from "@/components/OurNumbers";
import OurStory from "@/components/OurStory";
import StartShopping from "@/components/StartShopping";

const AboutPage = () => {
  return (
    <div className="mt-10">
      <OurStory />
      <OurNumbers />
      <OurMission />
      <OurCore />
      <StartShopping />
    </div>
  );
};

export default AboutPage;
