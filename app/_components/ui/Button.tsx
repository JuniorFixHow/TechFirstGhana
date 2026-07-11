import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type BtnProps = {
    text: string,
    icon?: ReactNode,
} & ButtonVariants & ComponentProps<'button'>;

export default function Button({icon, bttype, size, width, text, className, ...props}: BtnProps) {
  return (
    <button {...props} className={twMerge(buttonStyles({ bttype, size, width }), className)}>
      <span>{text}</span>
      {icon && icon}
    </button>
  )
}

const buttonStyles = tv({
    base: 'rounded-lg w-fit flex items-center gap-6 hover:cursor-pointer flex items-center justify-center gap-2 transition-colors duration-300',
    variants: {
        bttype:{
            primary: 'bg-[#86367E] text-white hover:bg-[#6B2A66]',
            secondary: 'bg-white text-[#86367E] hover:bg-[#F0F0F0]',
            tertiary: 'bg-white text-[#0B1C30] hover:bg-[#F0F0F0]',
            blue: 'text-white bg-[#0B1C30] hover:bg-[#1B2C40]',
            outlined: 'bg-transparent border border-white text-white hover:bg-[#F0F0F0]',
            ghost: 'bg-transparent border border-[#74777E] text-white hover:bg-[#F0F0F0]',
            elevated: 'bg-white shadow-sm border border-[#C4C6CE] text-grey-800 hover:bg-[#F0F0F0]',
        },
        size: {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 font-medium text-sm',
            lg: 'px-8 py-4 font-semibold text-lg',
        },
        width:{
            fit: 'w-fit',
            full: 'w-full',
        }
    },
    defaultVariants: {
        type: 'primary',
        size: 'sm',
    }
})

type ButtonVariants = VariantProps<typeof buttonStyles>;