import {Title} from '@/shared/ui/Title.tsx';
import {Flex} from '@/shared/ui/Flex.tsx';
import {Button} from '@/shared/ui/Button.tsx';
import {memo} from 'react';
import {useTheme} from '@/shared/lib/hooks/useTheme.ts';
import {SidebarLogo} from '@/widgets/Sidebar/ui/SidebarLogo.tsx';

export const Sidebar = memo(() => {

	const {
		theme,
		toggleTheme
	} = useTheme();

	return (
		<Flex direction='col'>
			<SidebarLogo/>
			<Flex direction='col'>
				<Title size='lg' variant='primary'>{theme}</Title>
				<Flex>
					<Button onClick={toggleTheme}>theme</Button>
				</Flex>
			</Flex>
		</Flex>
	);
});