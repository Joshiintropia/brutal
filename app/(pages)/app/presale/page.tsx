'use client'
import Footer from "../components/footer";
import DayPass from "./sections/dayPass";
import Plans from "./sections/plans";
import Programs from "./sections/programs";
import SectionBanner from "./sections/sectionBanner";

const Index = ()=>{
    return (
        <>
            <SectionBanner/>
            <Plans/>
            <Programs/>
            <DayPass/>
            <Footer/>
        </>
    );
}
export default Index;