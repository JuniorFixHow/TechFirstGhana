import React from 'react'
import Text from '../../ui/Text';
import { brand } from '@/lib/site-data';
import { MdOutlineShield } from 'react-icons/md';
import { LuGauge } from 'react-icons/lu';

const Trust = () => {
  return (
    <section id='trust' className='flex flex-col items-center md:flex-row gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-[#86367E]'>
        <div className="flex flex-1 flex-col gap-6">
            <Text text={`Why Leading Companies Trust ${brand.name}`} type="big" color="white" />
            <Text text={`We bring a unique blend of corporate discipline and startup agility to every project, ensuring your tech stack is an asset, not a liability.`} type="base" color="white" />
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-1">
                    <MdOutlineShield color='white' size={18} />
                    <Text text='Rock-Solid Security' type="heavytext" color="white" />
                    <Text text='Enterprise-grade protection integrated into every layer of our solutions.' type="base" color="white" />
                </div>
                <div className="flex flex-col gap-1">
                    <LuGauge color='white' size={18} />
                    <Text text='Rapid Innovation' type="heavytext" color="white" />
                    <Text text='Faster time-to-market without compromising on code quality or architecture.' type="base" color="white" />
                </div>
            </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 w-full">
            <div className="flex w-full flexcenter p-6 bg-white rounded-lg gap-4">
                <Text text='98%' type="verybig" color="black" />
                <div className="flex flex-col">
                    <Text text='Client Retention' type='base' color='black' />
                    <Text text='Long-term partnerships built on consistent delivery.' type='base' color='black' />
                </div>
            </div>
            <div className="flex w-full flexcenter p-6 bg-white rounded-lg gap-4">
                <Text text='24/7' type="verybig" color="black" />
                <div className="flex flex-col">
                    <Text text='Managed Support' type='base' color='black' />
                    <Text text='Proactive monitoring and expert resolution around the clock.' type='base' color='black' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust