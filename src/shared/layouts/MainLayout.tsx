import {ReactNode} from 'react';

interface MainLayoutProps {
	sidebar: ReactNode;
	navbar: ReactNode;
	content: ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {

	const {
		sidebar,
		navbar,
		content
	} = props;

	return (
		<div className='flex h-full'>
			<div className='w-[320px] flex-[0_0_320px] border-r-[1px] border-border'>
				<div className='sticky top-0 left-0 right-0 w-full p-4'>
					{sidebar}
				</div>
			</div>
			<div className='grow'>
				<div className='p-4 border-b-[1px] border-border sticky top-0 left-0 right-0 w-full bg-bg-dark'>{navbar}</div>
				<div className='p-4'>{content}</div>
			</div>
		</div>
	);
};