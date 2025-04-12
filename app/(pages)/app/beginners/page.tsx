import Footer from "../components/footer";
import Discover from "./sections/discover";
import Form from "./sections/form";
import SectionBanner from "./sections/sectionBanner";
import TrainingCards from "./sections/trainingCards";
import Transform from "./sections/transform";
import GetInTouch from "./sections/getInTouch";

const Index = () => {
  return (<>
  <SectionBanner/>
  <TrainingCards/>
  <Transform/>
  <Discover/>
  <Form/>
  <GetInTouch/>
  <Footer/>
  </>);
};
export default Index;