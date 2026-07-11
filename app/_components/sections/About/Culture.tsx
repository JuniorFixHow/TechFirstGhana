import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";
import { MdGroups } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import CultureCard from "../../misc/CultureCard";

const Culture = () => {
  return (
    <section id='culture' className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-[#DCE9FF] items-center' >
        <div className="flex flex-col gap-5">
            <Text text='Our Culture' type="big" color="black" />
            <Text type='base' color='grey' text={`We foster an environment of radical candor and collaborative problem-solving. At ${brand.name}, talent is nurtured, curiosity is rewarded, and diversity of thought is our greatest asset. We are more than colleagues; we are a collective of creators.`} />

            <div className="flex gap-3 items-center">
                <MdGroups color='#86367E' size={16} />
                <div className="flex flex-col gap-0.5">
                    <Text text='Collaborative DNA' type="smmed" color="black" />
                    <Text text='Cross-functional squads for every project.' type="sm" color="grey" />
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <RiGraduationCapFill color='#86367E' size={16} />
                <div className="flex flex-col gap-0.5">
                    <Text text='Continuous Learning' type="smmed" color="black" />
                    <Text text='Quarterly upskilling and research sabbaticals.' type="sm" color="grey" />
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <CultureCard title='40%' text='Female Leadership' />
            <CultureCard title='25+' text='Nationalities' />
            <CultureCard title='92%' text='Employee Satisfaction' />
            <CultureCard title='5k+' text='Coffee Cups / Month' />
        </div>
    </section>
  )
}

export default Culture