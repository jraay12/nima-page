import BoardMember from "../component/BoardMember";
import Events from "../component/Events";
import NimaFooter from "../component/Footer";
import HeroSection from "../component/HeroSection";
import JoinNima from "../component/JoinNima";
import MissionVision from "../component/MissionVision";

const LandingPage = () => {
  return (
    <div className="">
      <HeroSection />
      <MissionVision />
      <JoinNima />
      <BoardMember />
      <Events />
      <NimaFooter />
    </div>
  );
};

export default LandingPage;
