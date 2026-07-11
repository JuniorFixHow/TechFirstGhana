import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ServiceTagsProps = {
    tag: string,
} & ComponentProps<'div'>;

const ServiceTags = ({ tag, className, ...props }: ServiceTagsProps) => {
  return (
    <div className={twMerge('flexcenter px-3 py-2 rounded-2xl bg-[#E5EEFF] text-xs', className)} {...props} >{tag}</div>
  )
}

export default ServiceTags