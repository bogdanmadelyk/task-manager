import {FC, forwardRef, ReactNode, Ref} from 'react';
import {cn} from '@/utils/helpers/cn.ts';
import {cva, VariantProps} from 'class-variance-authority';

const flexVariants = cva(
	'flex flex-wrap',
	{
		variants: {
			align: {
				start: 'items-start',
				center: 'items-center',
				end: 'items-end'
			},
			gap: {
				small: 'gap-2',
				medium: 'gap-4',
				large: 'gap-6',
			},
			direction: {
				row: 'flex-row',
				col: 'flex-col',
			},
		},
		defaultVariants: {
			gap: 'medium',
			direction: 'row',
			align: 'start'
		}
	}
);

interface FlexProps extends VariantProps<typeof flexVariants>{
	className?: string;
	children: ReactNode;
	ref?: Ref<HTMLDivElement>
}

export const Flex: FC<FlexProps> = forwardRef((props, ref) => {

	const {
		className,
		children,
		gap,
		direction,
		align,
		...rest
	} = props;

	return (
		<div
			ref={ref}
			className={cn(flexVariants({className, gap, direction, align}))}
			{...rest}
		>{children}</div>
	);
});