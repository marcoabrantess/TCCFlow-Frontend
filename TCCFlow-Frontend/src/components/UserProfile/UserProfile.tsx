import React, { useState, useRef, useEffect } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';
import { UserProfileContainer, UserAvatar, InitialsCircle } from './styles';

interface UserProfileProps {
    name: string;
    photoUrl?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, photoUrl }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const getInitials = (name: string) => {
        const [firstName, lastName] = name.split(' ');
        return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
    };

    return (
        <UserProfileContainer ref={menuRef}>
            {photoUrl ? (
                <UserAvatar
                    onClick={toggleMenu}
                    src={photoUrl}
                    alt="User Avatar"
                />
            ) : (
                <InitialsCircle onClick={toggleMenu}>
                    {getInitials(name)}
                </InitialsCircle>
            )}
            {menuOpen && <UserMenu onClose={() => setMenuOpen(false)} />}
        </UserProfileContainer>
    );
};
