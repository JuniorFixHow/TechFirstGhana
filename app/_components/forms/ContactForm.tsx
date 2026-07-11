'use client';
import { GoPaperAirplane } from "react-icons/go";
import Button from "../ui/Button";
import Text from "../ui/Text";
import { SubmitEvent, useRef, useState } from "react";
import { ContactFormPayload } from "@/types/Types";
import { enqueueSnackbar } from "notistack";
import { sendEmail } from "@/lib/actions/contact.action";

const ContactForm = () => {
    const [data, setData] = useState<Partial<ContactFormPayload>>({serviceType:'Strategic Advisory'});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const formRef = useRef<HTMLFormElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    
    const handleSubmit = async(e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        setIsSubmitting(true);
        try {
            const res = await sendEmail(data as ContactFormPayload);
            enqueueSnackbar(res.message, { variant: res.success ? 'success' : 'error' });
        } catch (error) {
          enqueueSnackbar("Error occured deleivering your message. Please retry.", { variant: 'error' });
          console.error(error);
        }finally{
            setIsSubmitting(false);
        }
    }
    
  return (
    <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col p-6 md:p-8 rounded-lg md:rounded-xl bg-white md:flex-3 border border-[#C4C6CE] gap-6 w-full' >
        <Text type='heavytext' color='black' text='Send us a message' />

        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
                <div className="flex gap-4 flex-col">
                    <div className="flex flex-col gap-0.5">
                        <Text type='smm' color='black' text='Full Name' />
                        <input onChange={handleChange} name='name' required type='text' className='input w-full' placeholder='Enter your name' />
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                        <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                            <Text type='smm' color='black' text='Email Address' />
                            <input onChange={handleChange} name='email' required type='email' className='input w-full' placeholder='Enter your email address' />
                        </div>
                        <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                            <Text type='smm' color='black' text='Phone Number' />
                            <input onChange={handleChange} name='phoneNumber' required type='tel' className='input w-full' placeholder='Enter your phone number' />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                        <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                            <Text type='smm' color='black' text='Company (Optional)' />
                            <input onChange={handleChange} name='company' required type='text' className='input w-full' placeholder="Enter your company's name" />
                        </div>
                        <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                            <Text type='smm' color='black' text='Interest' />
                            <select onChange={handleChange} required name="serviceType" defaultValue="Strategic Advisory" className='input w-full' >
                                <option value="Strategic Advisory">Strategic Advisory</option>
                                <option value="Custom Software">Custom Software</option>
                                <option value="Cloud Engineering">Cloud Engineering</option>
                                <option value="Microsoft 365">Microsoft 365</option>
                                <option value="Enquiry">Enquiry/Complaint</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <Text type='smm' color='black' text='Message' />
                        <textarea onChange={handleChange} name='message' required rows={3}  className='input w-full' placeholder='Enter your message' />
                    </div>
                </div>
            </div>
            <Button text={isSubmitting ? 'Sending Message...' : 'Send Message'} bttype='primary' className='text-lg font-bold w-full md:w-2/3' icon={<GoPaperAirplane color='white' size={16} />} />
        </div>
    </form>
  )
}

export default ContactForm