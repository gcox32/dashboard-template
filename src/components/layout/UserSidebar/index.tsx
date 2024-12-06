import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function UserSidebar({ user }: { user: any }) {
    const router = useRouter();

    const handleSignOut = async () => {
        console.log('Simulating sign out...');
        router.push("/");
    };
    return (
        <div className="user-sidebar">
            <div className="user-info">
                <div className="user-avatar"
                    style={{
                        backgroundImage: `url(${user.backgroundImage})`
                    }}
                />
                <h2>{user.name}</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><Link href="#">Edit Profile</Link></li>
                </ul>
            </nav>
            <div className="logout-container">
                <button onClick={handleSignOut} className="logout-button">Sign Out</button>
            </div>
        </div>
    );
} 