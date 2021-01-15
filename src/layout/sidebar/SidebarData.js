import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'


const SidebarData = [
    {
        title: 'Algorithms',
        icon: <AiIcons.AiFillCalculator />,
        hasSubNav: true,
        subNav: [
            {
                subTitle: 'A*',
                icon: <AiIcons.AiOutlineStar />
            },
            {
                subTitle: 'Dijkstra',
                icon: <GiIcons.GiPathDistance />
            },
            {
                subTitle: 'Breath First Search (BFS)',
                icon: <FaIcons.FaUserFriends />
            },
            {
                subTitle: 'Depth First Search (DFS)',
                icon: <FaIcons.FaRss />
            }
        ]
    },

    {
        title: 'Generate Maze',
        icon: <GiIcons.GiMaze/>,
        hasSubNav: true,
        subNav: [
            {
                subTitle: 'Kruskal\'s Algorithm',
                icon: <CgIcons.CgMaze />
            },
            {
                subTitle: 'Prim\'s Algorithm',
                icon: <GiIcons.GiMazeCornea />
            },
        ]
    },

    {
        title: 'Generate Random Walls',
        hasSubNav: false,
        icon: <GiIcons.GiCubes />
    },

    {
        title: 'Clean Path',
        hasSubNav: false,
        icon: <AiIcons.AiOutlineClear/>
    },

    {
        title: 'Reset',
        hasSubNav: false,
        icon: <GrIcons.GrPowerReset />
    }
];

export default SidebarData