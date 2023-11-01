import {MainLayout} from '@/shared/layouts/MainLayout.tsx';
import {Flex} from '@/shared/ui/Flex.tsx';
import {Title} from '@/shared/ui/Title.tsx';
import {Paragraph} from '@/shared/ui/Paragraph.tsx';
import {memo} from 'react';
import {Sidebar} from '@/widgets/Sidebar';
import {Navbar} from '@/widgets/Navbar';

export const MainPage = memo(() => {

	const content = (
		<Flex gap='lg' direction='col'>
			<Flex gap='sm' direction='col'>
				<Title size='lg' variant='primary'>lg primary</Title>
				<Paragraph size='lg' variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title variant='primary'>md primary</Title>
				<Paragraph variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title size='sm' variant='primary'>sm primary</Title>
				<Paragraph size='sm' variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title size='lg'>lg default</Title>
				<Paragraph size='lg'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title>md default</Title>
				<Paragraph>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title size='sm'>sm default</Title>
				<Paragraph size='sm'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title size='lg' variant='secondary'>lg secondary</Title>
				<Paragraph size='lg' variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title variant='secondary'>md secondary</Title>
				<Paragraph variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
			<Flex gap='sm' direction='col'>
				<Title size='sm' variant='secondary'>sm secondary</Title>
				<Paragraph size='sm' variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
			</Flex>
		</Flex>
	);

	return (
		<MainLayout sidebar={<Sidebar/>} navbar={<Navbar/>} content={content}/>
	);
});