import { usePathname } from 'next/navigation';
import React from 'react';
import { 
    FaChevronLeft, 
    FaChevronRight, 
    FaTachometerAlt, 
    FaChartLine, 
    FaHistory, 
    FaUsers, 
    FaMapMarkerAlt, 
    FaBlog, 
    FaCalculator,
    FaTimes
} from 'react-icons/fa';
import Link from 'next/link';
import NavLogo from '@/src/components/layout/NavLogo';
import { useSidebar } from '@/src/contexts/SidebarContext';
import { NavGroup } from './types';

const navGroups: NavGroup[] = [
    {
        title: 'Dashboard',
        items: [
            { icon: <FaTachometerAlt />, label: 'Dashboard', href: '#' },
            { icon: <FaChartLine />, label: 'KPIs', href: '#' },
            { icon: <FaHistory />, label: 'Logs', href: '#' },
        ]
    },
    {
        title: 'Management',
        items: [
            { icon: <FaUsers />, label: 'Users', href: '#' },
            { icon: <FaMapMarkerAlt />, label: 'Tracking', href: '#' },
            { icon: <FaBlog />, label: 'Blog', href: '#' },
        ]
    },
    {
        title: 'Tools',
        items: [
            { icon: <FaCalculator />, label: 'Calculator', href: '#' },
        ]
    }
];

export default function PersistentSidebar() {
    const { isExpanded, setIsExpanded, isMobileView, isMobileOpen, setMobileOpen } = useSidebar();
    const pathname = usePathname();

    const sidebarContent = (
        <>
            {!isMobileView && (
                <button
                    className="toggle-button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
                >
                    {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                </button>
            )}
            <NavLogo />
            <nav className="persistent-nav">
                {navGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="nav-group">
                        <h3 className={`nav-group-title ${isExpanded || isMobileOpen ? 'expanded' : ''}`}>
                            {group.title}
                        </h3>
                        <ul>
                            {group.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <Link 
                                        href={item.href}
                                        className={pathname === item.href ? 'active' : ''}
                                    >
                                        <span className="icon">{item.icon}</span>
                                        {(isExpanded || isMobileOpen) && <span className="label">{item.label}</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </>
    );

    if (isMobileView) {
        return (
            <>
                <div 
                    className={`sidebar-overlay ${isMobileOpen ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                />
                <div className={`mobile-sidebar ${isMobileOpen ? 'open' : ''}`}>
                    <button 
                        className="close-button"
                        onClick={() => setMobileOpen(false)}
                    >
                        <FaTimes />
                    </button>
                    {sidebarContent}
                </div>
            </>
        );
    }

    return (
        <div className={`persistent-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {sidebarContent}
        </div>
    );
} 