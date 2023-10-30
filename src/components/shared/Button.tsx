import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/utils/helpers/cn.ts';

const buttonVariants = cva(
	'font-bold border-primary border-[2px] rounded-3xl',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-white',
				secondary: 'bg-white text-primary dark:border-white',
			},
			size: {
				small: 'text-sm py-2 px-4',
				medium: 'text-md py-2 px-5',
				large: 'text-xl py-3 px-6',
			},
		},
		defaultVariants: {
			size: 'medium',
			variant: 'primary',
		},
	}
);
interface ButtonProps extends
	ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants>{
		className?: string;
		children: ReactNode;
	}

export const Button = memo((props: ButtonProps) => {

	const {
		className,
		children,
		size,
		variant,
		...rest
	} = props;

	return (
		<button
			className={cn(buttonVariants({className, size, variant}))}
			{...rest}
		>{children}</button>
	);
});