import Footer from "../components/footer";
import EscapeOrdinary from "./sections/escapeOrdinary";
import SectionBanner from "./sections/sectionBanner";
import Subscribe from "./sections/subscribe";
import TrainingModalities from "./sections/trainingModalities";

const Index = ()=>{
    return (
        <>
        <SectionBanner/>
        <TrainingModalities/>
        <EscapeOrdinary/>
        <Subscribe/>
        <Footer/>
        </>
    );
}
export default Index;