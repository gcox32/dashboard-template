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
    category: 'Pages'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <FaEnvelope />,
    category: 'Pages'
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <FaUserCircle />,
    category: 'Pages'
  }
]; 