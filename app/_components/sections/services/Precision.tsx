import Image from "next/image";
import Counter from "../../misc/Counter";
import Text from "../../ui/Text";

const Precision = () => {
  return (
    <section id='precision' className='flex flex-col md:flex-row items-stretch py-6 md:py-12 gap-5 md:gap-8 px-[10%] bg-[#F8F9FF] w-full' >
        <div className="flex md:flex-1 w-full gap-3 flex-col">
            <Text type='big' text='Engineered for Precision' />
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 w-full">
                    <Counter count='1' />
                    <div className="flex flex-col gap-1">
                        <Text type='xl' text='Architectural Design' />
                        <Text type='base' color='grey' text="We don't just build; we architect. Every project starts with a deep technical audit and structural mapping." />
                    </div>
                </div>
                <div className="flex gap-3">
                    <Counter count='2' />
                    <div className="flex flex-col gap-1">
                        <Text type='xl' text='Agile Execution' />
                        <Text type='base' color='grey' text="Rapid prototyping and iterative development cycles keep your stakeholders involved at every milestone." />
                    </div>
                </div>
                <div className="flex gap-3">
                    <Counter count='3' />
                    <div className="flex flex-col gap-1">
                        <Text type='xl' text='EA & Load Testing' />
                        <Text type='base' color='grey' text="Rigorous stress testing ensures your application remains resilient under peak enterprise traffic." />
                    </div>
                </div>
            </div>
        </div>


        <div className="flex w-full h-80 md:h-auto md:flex-1 flex-col bg-white rounded-lg md:rounded-2xl p-4 relative shadow-xl gap-5">
            <div className="flex grow  relative">
                <Image src='/images/Visualization.png' className='rounded-lg md:rounded-2xl'  alt='Precision Image' fill />
            </div>
            <div className="flex flex-col bg-[#D3E4FE] rounded p-3">
                <div className="flex items-center justify-between">
                    <Text text='DEPLOYMENT STATUS' type='smmed' color='grey' />
                    <Text text='Complete' type='smmed' color='red' />
                </div>
                <div className='w-full h-2 rounded-xl bg-[#86367E]' />
            </div>
        </div>
    </section>
  )
}

export default Precision