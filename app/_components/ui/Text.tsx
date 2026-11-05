import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

// Semantic element to render. Headings (h1, h2, h3) tell search engines
// how a page is structured; the visual style still comes from `type`.
type TextElement = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';

type TextProps = {
    text: string,
    as?: TextElement,
} & TextVariants & HTMLAttributes<HTMLElement>;

export default function Text({type, color, align, text, className, as: Tag = 'span', ...props}: TextProps) {
  return (
    <Tag {...props} className={twMerge(textStyles({ type, color, align }), className)}>
      {text}
    </Tag>
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