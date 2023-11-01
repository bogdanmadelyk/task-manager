import {Flex} from '@/shared/ui/Flex.tsx';
import {BsFillKanbanFill} from 'react-icons/bs';
import {Title} from '@/shared/ui/Title.tsx';
import {Icon} from '@/shared/ui/Icon.tsx';

export const SidebarLogo = () => {
	return (
		<Flex gap='sm' align='center'>
			<Icon icon={BsFillKanbanFill} size='lg'/>
			<Title size='lg'>Kanban</Title>
		</Flex>
	);
};