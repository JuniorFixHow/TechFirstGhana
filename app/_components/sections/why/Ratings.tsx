import Text from "../../ui/Text";

const Ratings = () => {
  return (
    <section id='ratings' className='bg-white w-full flex flex-row items-center justify-between py-6 md:py-12 gap-5 md:gap-8 px-[10%] border-y border-y-gray-200' >
        <div className="flex flex-col items-center">
            <Text text='50+' type='verybig' color='red' />
            <Text text='PROJECTS DELIVERED' type='smm' align='center' color='grey' />
        </div>
        <div className="flex flex-col items-center">
            <Text text='24/7' type='verybig' color='red' />
            <Text text='GLOBAL SUPPORT' type='smm' align='center' color='grey' />
        </div>
        <div className="flex flex-col items-center">
            <Text text='98%' type='verybig' color='red' />
            <Text text='CLIENT RETENTION' type='smm' align='center' color='grey' />
        </div>
        <div className="flex flex-col items-center">
            <Text text='15+' type='verybig' color='red' />
            <Text text='INDUSTRIES SERVED' type='smm' align='center' color='grey' />
        </div>
    </section>
  )
}

export default Ratings