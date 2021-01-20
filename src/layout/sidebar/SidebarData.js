import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as CgIcons from 'react-icons/cg'
import {IoMdRefreshCircle} from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'


const SidebarData = [
    {
        title: 'Algorithms',
        icon: <AiIcons.AiFillCalculator />,
        onOpenSubMenu: <RiIcons.RiArrowUpSLine />,
        onCloseSubMenu: <RiIcons.RiArrowDownSLine />,
        subNav: [
            {
                subTitle: 'A*',
                icon: <AiIcons.AiOutlineStar />,
                isSubButton: true,
                id: 1,
            },
            {
                subTitle: 'Dijkstra',
                icon: <GiIcons.GiPathDistance />,
                isSubButton: true,
                id: 2,
            },
            {
                subTitle: 'Breath First Search (BFS)',
                icon: <FaIcons.FaUserFriends />,
                isSubButton: true,
                id: 3,
            },
            {
                subTitle: 'Depth First Search (DFS)',
                icon: <FaIcons.FaRss />,
                isSubButton: true,
                id: 4,
            }
        ]
    },

    {
        title: 'Generate Maze',
        icon: <GiIcons.GiMaze/>,
        onOpenSubMenu: <RiIcons.RiArrowUpSLine />,
        onCloseSubMenu: <RiIcons.RiArrowDownSLine />,
        subNav: [
            {
                subTitle: 'Kruskal\'s Algorithm',
                icon: <CgIcons.CgMaze />,
                isSubButton: true,
                id: 1,
            },
            {
                subTitle: 'Prim\'s Algorithm',
                icon: <GiIcons.GiMazeCornea />,
                isSubButton: true,
                id: 2,
            },
        ]
    },

    {
        title: 'Generate Walls',
        isButton: true,
        icon: <GiIcons.GiCubes />
    },

    {
        title: 'Clean Path',
        isButton: true,
        icon: <AiIcons.AiOutlineClear/>
    },

    {
        title: 'Reset',
        isButton: true,
        icon: <IoMdRefreshCircle />
    }
];

export default SidebarData