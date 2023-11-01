import {Flex} from '@/shared/ui/Flex.tsx';
import {BsFillKanbanFill} from 'react-icons/bs';
import {Title} from '@/shared/ui/Title.tsx';

export const SidebarLogo = () => {
	return (
		<Flex gap='sm' align='center'>
			<BsFillKanbanFill/>
			<Title>Kanban</Title>
		</Flex>
	);
};