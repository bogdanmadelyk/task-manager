import {memo, ReactNode} from 'react';
import {cn} from '@/shared/lib/helpers/cn.ts';
import {cva, VariantProps} from 'class-variance-authority';

const titleVariants = cva(
	'font-bold',
	{
		variants: {
			size: {
				sm: 'text-xl',
				md: 'text-2xl',
				lg: 'text-3xl',
			},
			variant: {
				primary: 'text-primary',
				secondary: 'text-text',
				default: 'text-title'
			}
		},
		defaultVariants: {
			size: 'md',
			variant: 'default'
		}
	}
);

interface TitleProps extends VariantProps<typeof titleVariants>{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
	className?: string;
	children: ReactNode;
}

export const Title = memo((props: TitleProps) => {

	const {
		as: Tag = 'div',
		className,
		children,
		size,
		variant
	} = props;

	return (
		<Tag className={cn(titleVariants({className, size, variant}))}>{children}</Tag>
	);
});