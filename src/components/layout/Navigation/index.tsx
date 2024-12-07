"use client";

import React, { useState } from "react";
import { FaCog, FaBars } from "react-icons/fa";
import Sidebar from "@/src/components/layout/Sidebar";
import PageSettingsSidebar from "@/src/components/layout/PageSettingsSidebar";
import UserSidebar from "@/src/components/layout/UserSidebar";
import { useRouter } from "next/navigation";
import "./styles.css";
import PersistentSidebar from "@/src/components/layout/PersistentSidebar";
import { useSidebar } from "@/src/contexts/SidebarContext";

export default function Navigation(user: any) {

    const router = useRouter();
    const [pageSettingsSidebarOpen, setPageSettingsSidebarOpen] = useState(false);
    const [userSidebarOpen, setUserSidebarOpen] = useState(false);
    const { isExpanded, setIsExpanded, isMobileView, setMobileOpen } = useSidebar();

    return (
        <>
            <PersistentSidebar />
            <nav className={`main-nav ${isExpanded ? 'sidebar-expanded' : ''}`}>
                {isMobileView && (
                    <button
                        className="hamburger-button"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <FaBars />
                    </button>
                )}
                <div className="nav-controls">
                    <button
                        className="icon-button"
                        aria-label="Settings"
                        onClick={() => setPageSettingsSidebarOpen(true)}
                    >
                        <FaCog className="settings-icon" />
                    </button>
                    <button
                        className="avatar-button"
                        aria-label="User menu"
                        onClick={() => setUserSidebarOpen(true)}
                        style={{
                            backgroundImage: `url(${user.backgroundImage})`
                        }}
                    />
                </div>
            </nav>

            <Sidebar
                isOpen={pageSettingsSidebarOpen}
                onClose={() => setPageSettingsSidebarOpen(false)}
                position="right"
            >
                <PageSettingsSidebar />
            </Sidebar>

            <Sidebar
                isOpen={userSidebarOpen}
                onClose={() => setUserSidebarOpen(false)}
                position="right"
            >
                <UserSidebar user={user} />
            </Sidebar>
        </>
    );
}