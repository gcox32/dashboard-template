import { SearchResult } from '@/src/contexts/SearchContext';
import { 
    FaInfoCircle, 
    FaEnvelope, 
    FaUserCircle 
} from 'react-icons/fa';

export const staticRoutes: SearchResult[] = [
  {
    label: 'About',
    href: '/about',
    icon: <FaInfoCircle />,
    category: '/'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <FaEnvelope />,
    category: '/'
  },
  {
    label: 'Profile',
    href: '/user/profile',
    icon: <FaUserCircle />,
    category: 'User'
  }
]; 