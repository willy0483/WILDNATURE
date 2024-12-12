import { NavBarStyled } from "./NavBar.Styled";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
    const [activeItemId, setActiveItemId] = useState();
    document.title = activeItemId;
    return (
        <NavBarStyled>
            <ul>
                <li>
                    <NavLink 
                        to="/Species" 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => setActiveItemId('Species')}
                    >
                        Species
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Locations" 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => setActiveItemId('Locations')}
                    >
                        Locations
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Lections" 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => setActiveItemId('Lections')}
                    >
                        Lections
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Donate" 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => setActiveItemId('Donate')}
                    >
                        Donate
                    </NavLink>
                </li>
            </ul>
        </NavBarStyled>
    );
};