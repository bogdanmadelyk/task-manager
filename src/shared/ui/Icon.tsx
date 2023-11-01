import {memo} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/shared/lib/helpers/cn.ts';
import {IconType} from 'react-icons';

const iconVariants = cva(
	'',
	{
		variants: {
			variant: {
				primary: 'fill-primary',
				secondary: 'fill-text',
			},
			size: {
				sm: 'w-[16px] h-[16px]',
				md: 'w-[24px] h-[24px]',
				lg: 'w-[32px] h-[32px]',
			},
		},
		defaultVariants: {
			size: 'md',
			variant: 'primary',
		},
	}
);
interface IconProps extends VariantProps<typeof iconVariants>{
	className?: string;
	icon: IconType;
}

export const Icon = memo((props: IconProps) => {

	const {
		className,
		icon: Tag,
		size,
		variant,
		...rest
	} = props;

	return (
		<Tag
			className={cn(iconVariants({className, size, variant}))}
			{...rest}
		/>
	);
});