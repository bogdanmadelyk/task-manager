import {useTheme} from '@/utils/hooks/useTheme.ts';
import {Title} from '@/components/shared/Title.tsx';
import {Paragraph} from '@/components/shared/Paragraph.tsx';
import {Button} from '@/components/shared/Button.tsx';
import {Flex} from '@/components/shared/Flex.tsx';

export const Navbar = () => {
	const {
		theme,
		toggleTheme
	} = useTheme();
	return (
		<div>
			<Flex gap='large' direction='col'>
				<Flex direction='col'>
					<Title size='large' variant='primary'>{theme}</Title>
					<Flex>
						<Button onClick={toggleTheme}>theme</Button>
						<Button variant='secondary' onClick={toggleTheme}>theme</Button>
					</Flex>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='large' variant='primary'>Large primary</Title>
					<Paragraph size='large' variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title variant='primary'>Medium primary</Title>
					<Paragraph variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='small' variant='primary'>Small primary</Title>
					<Paragraph size='small' variant='primary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='large'>Large default</Title>
					<Paragraph size='large'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title>Medium default</Title>
					<Paragraph>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='small'>Small default</Title>
					<Paragraph size='small'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='large' variant='secondary'>Large secondary</Title>
					<Paragraph size='large' variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title variant='secondary'>Medium secondary</Title>
					<Paragraph variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
				<Flex gap='small' direction='col'>
					<Title size='small' variant='secondary'>Small secondary</Title>
					<Paragraph size='small' variant='secondary'>Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.</Paragraph>
				</Flex>
			</Flex>
		</div>
	);
};