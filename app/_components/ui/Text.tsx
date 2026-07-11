import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type TextProps = {
    text: string,
} & TextVariants & ComponentProps<'span'>;

export default function Text({type, color, align, text, className, ...props}: TextProps) {
  return (
    <span {...props} className={twMerge(textStyles({ type, color, align }), className)}>
      {text}
    </span>
  )
}

const textStyles = tv({
    variants: {
        type:{
            smmed:'text-xs font-medium',
            bsmed:'text-base font-medium',
            verybig:'text-4xl md:text-5xl font-bold',
            big:'text-3xl md:text-4xl font-semibold',
            heavytext:'text-xl md:text-2xl font-semibold',
            base:'text-base',
            lg:'text-base md:text-lg',
            sm:'text-sm',
            smm:'text-xs md:text-sm font-medium',
            xs:'text-xs',
            xl:'text-lg md:text-xl',
        },
        color:{
            white:'text-white',
            black:'text-[#000F22]',
            grey: 'text-[#43474D]',
            red:'text-[#86367E]',
        },
        align:{
            left:'text-left',
            center:'text-center',
            right:'text-right',
        }
    },
    defaultVariants: {
        type: 'base',
        color: 'black'
    }
})

type TextVariants = VariantProps<typeof textStyles>;