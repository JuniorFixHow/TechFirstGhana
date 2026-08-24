import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";

const Internship = () => {
  return (
    <section id="internship" className="flex flex-col gap-6 md:gap-10 py-6 md:py-12 w-full px-[10%] bg-[#F8F9FF] items-center" >
         <div className="flex flex-col gap-3 items-center w-full lg:w-2/3">
            <Text type='verybig' align="center" color='black' text='Join Our Equity-based Career Program' />
            <Text type='lg' color='grey' align="center" text={`Be part of ${brand?.name} and help build innovative technology projects with us. We welcome all tech stakeholder who want to contribute their skills, ideas, or resources in exchange for agreed equity. Together, we can build and share in the value of what we create.`} />
        </div>
    </section>
  )
}

export default Internship