import OurMission from "@/components/OurMission";
import OurNumbers from "@/components/OurNumbers";
import OurStory from "@/components/OurStory";

const AboutPage = () => {
  return (
    <div className="mt-10">
      <OurStory />
      <OurNumbers />
      <OurMission />
    </div>
  );
};

export default AboutPage;
