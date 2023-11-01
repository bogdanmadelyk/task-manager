import {memo, ReactNode} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/shared/lib/helpers/cn.ts';

const paragraphVariants = cva(
	'',
	{
		variants: {
			size: {
				sm: 'text-sm',
				md: 'text-md',
				lg: 'text-xl',
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
interface ParagraphProps extends VariantProps<typeof paragraphVariants>{
	as?: 'p' | 'span' | 'div';
	className?: string;
	children: ReactNode;
}

export const Paragraph = memo((props: ParagraphProps) => {

	const {
		as: Tag = 'p',
		className,
		children,
		variant,
		size
	} = props;

	return (
		<Tag className={cn(paragraphVariants({className, size, variant}))}>{children}</Tag>
	);
});