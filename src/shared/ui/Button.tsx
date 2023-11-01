import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/shared/lib/helpers/cn.ts';

const buttonVariants = cva(
	'font-bold border-primary border-[2px] rounded-3xl',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-white',
				secondary: 'bg-white text-primary dark:border-white',
			},
			size: {
				sm: 'text-sm py-2 px-4',
				md: 'text-md py-2 px-5',
				lg: 'text-xl py-3 px-6',
			},
		},
		defaultVariants: {
			size: 'md',
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