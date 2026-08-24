'use client';
import { createCareer } from "@/lib/actions/careers.action";
import { CareersFormPayload } from "@/types/Types";
import { enqueueSnackbar } from "notistack";
import { KeyboardEvent, SubmitEvent, useRef, useState } from "react";
import Text from "../ui/Text";
import Button from "../ui/Button";

type ArrayFieldName = "skills" | "projectsIntrested";

const CareersForm = () => {
    const [data, setData] = useState<Partial<CareersFormPayload>>({
        experience: 'Beginner',
        role: 'Developer',
        compensationPreference: 'Project-profit-sharing',
        skills: [],
        projectsIntrested: [],
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Local, not-yet-committed text for the two tag-style inputs.
    const [skillInput, setSkillInput] = useState('');
    const [projectInput, setProjectInput] = useState('');

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addTag = (field: ArrayFieldName, value: string) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        setData((prev) => {
            const existing = prev[field] ?? [];
            if (existing.includes(trimmed)) return prev; // avoid duplicates
            return { ...prev, [field]: [...existing, trimmed] };
        });
    }

    const removeTag = (field: ArrayFieldName, index: number) => {
        setData((prev) => ({
            ...prev,
            [field]: (prev[field] ?? []).filter((_, i) => i !== index),
        }));
    }

    const handleTagKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        field: ArrayFieldName,
        value: string,
        clearValue: () => void,
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // stop it from submitting the form
            addTag(field, value);
            clearValue();
        }
    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await createCareer(data as CareersFormPayload);
            enqueueSnackbar(res.message, { variant: res.error ? 'error' : 'success' });
            if (!res.error) {
                setData({
                    experience: 'Beginner',
                    role: 'Developer',
                    compensationPreference: 'Project-profit-sharing',
                    skills: [],
                    projectsIntrested: [],
                });
                setSkillInput('');
                setProjectInput('');
                formRef.current?.reset();
                // console.log('Done')
            }
        } catch (error) {
            enqueueSnackbar("Error occured creating your career profile", { variant: 'error' });
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col p-6 md:p-8 rounded-lg md:rounded-xl bg-white md:flex-3 border border-[#C4C6CE] gap-6 w-full' >
            <Text type='heavytext' color='black' text='Sign up today' />

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-4 flex-col">
                        <div className="flex flex-col gap-0.5">
                            <Text type='smm' color='black' text='Full Name' />
                            <input onChange={handleChange} value={data.name ?? ''} name='name' required type='text' className='input w-full' placeholder='Enter your name' />
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Email Address' />
                                <input onChange={handleChange} value={data.email ?? ''} name='email' required type='email' className='input w-full' placeholder='Enter your email address' />
                            </div>
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Phone Number (with country code)' />
                                <input onChange={handleChange} value={data.phoneNumber ?? ''} name='phoneNumber' required type='tel' className='input w-full' placeholder='Enter your phone number' />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Country' />
                                <input onChange={handleChange} value={data.country ?? ''} name='country' required type='text' className='input w-full' placeholder='Enter your country' />
                            </div>
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Portfolio (Optional)' />
                                <input onChange={handleChange} value={data.portfolio ?? ''} name='portfolio' type='text' className='input w-full' placeholder='GitHub, blog, website or LinkedIn' />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Experience' />
                                <select onChange={handleChange} required name="experience" value={data.experience} className='input w-full' >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-0.5 w-full md:w-[48%]">
                                <Text type='smm' color='black' text='Role' />
                                <select onChange={handleChange} required name="role" value={data.role} className='input w-full' >
                                    <option value="Investor">Investor</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Product Manager">Product Manager</option>
                                    <option value="Marketer">Marketer</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Tech Writer">Tech Writer</option>
                                    <option value="Business Development">Business Development</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <Text type='smm' color='black' text='Compensation Preference' />
                            <select onChange={handleChange} required name="compensationPreference" value={data.compensationPreference} className='input w-full' >
                                <option value="Project-profit-sharing">Project profit sharing</option>
                                <option value="Equity">Equity</option>
                                <option value="Both">Both</option>
                                <option value="Open to discussion">Open to discussion</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <Text type='smm' color='black' text='Skills (Optional)' />
                            <input
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyDown={(e) => handleTagKeyDown(e, 'skills', skillInput, () => setSkillInput(''))}
                                type='text'
                                className='input w-full'
                                placeholder='Type a skill and press Enter'
                            />
                            {!!data.skills?.length && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {data.skills.map((skill, index) => (
                                        <span key={`${skill}-${index}`} className="flex items-center gap-2 bg-[#F5F7FD] border border-[#C4C6CE] rounded-full px-3 py-1 text-sm text-black">
                                            {skill}
                                            <button
                                                type='button'
                                                onClick={() => removeTag('skills', index)}
                                                aria-label={`Remove ${skill}`}
                                                className="text-[#91388B] font-bold leading-none hover:opacity-70"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <Text type='smm' color='black' text='Reason for Joining' />
                            <textarea onChange={handleChange} value={data.reasonForJoining ?? ''} name='reasonForJoining' required rows={3} className='input w-full' placeholder='Tell us why you want to join' />
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <Text type='smm' color='black' text='Projects Interested In (Optional)' />
                            <input
                                value={projectInput}
                                onChange={(e) => setProjectInput(e.target.value)}
                                onKeyDown={(e) => handleTagKeyDown(e, 'projectsIntrested', projectInput, () => setProjectInput(''))}
                                type='text'
                                className='input w-full'
                                placeholder='Type a project and press Enter'
                            />
                            {!!data.projectsIntrested?.length && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {data.projectsIntrested.map((project, index) => (
                                        <span key={`${project}-${index}`} className="flex items-center gap-2 bg-[#F5F7FD] border border-[#C4C6CE] rounded-full px-3 py-1 text-sm text-black">
                                            {project}
                                            <button
                                                type='button'
                                                onClick={() => removeTag('projectsIntrested', index)}
                                                aria-label={`Remove ${project}`}
                                                className="text-[#91388B] font-bold leading-none hover:opacity-70"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Button disabled={isSubmitting} text={isSubmitting ? 'loading...' : 'Proceed'} bttype='primary' className='text-lg font-bold w-full md:w-2/3' />
            </div>
        </form>
    )
}

export default CareersForm
