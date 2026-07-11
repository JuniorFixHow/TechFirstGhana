import React from 'react'
import Text from '../../ui/Text';

const Readiness = () => {
  return (
    <section id='readiness' className='bg-[#0A2540] py-6 md:py-12 flexcenter px-[10%] w-full' >
        <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-12 rounded-lg md:rounded-2xl bg-[#86367E]">
            <div className="flex flex-col gap-1.5 flex-1">
                <Text type='heavytext' color='white' text='Global Infrastructure Readiness' />
                <Text type='base' color='white' text='Real-time status monitoring for our worldwide distributed cloud networks.' />
            </div>

            <div className="flex items-center flex-wrap flex-1 gap-5 md:gap-6">
                <div className="flex flex-col items-center">
                    <Text type='verybig' color='white' text='99.99%' />
                    <Text type='smm' color='white' text='UPTIME SLA' />
                </div>
                <div className="flex flex-col items-center">
                    <Text type='verybig' color='white' text='<12ms>' />
                    <Text type='smm' color='white' text='AVG LATENCY' />
                </div>
                <div className="flex flex-col items-center">
                    <Text type='verybig' color='white' text='24/7' />
                    <Text type='smm' color='white' text='GLOBAL NOC' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Readiness