import { useState } from "react";
import { SideBarStyled } from "./SideBar.Styled";
import { Logo } from "../Logo/Logo";

export const SideBar = ({ items, handleClick }) => {
  const [activeItemId, setActiveItemId] = useState(items[0].id);

  const handleItemClick = (item) => {
    handleClick(item);
    setActiveItemId(item.id);
  };

  return (
    <SideBarStyled>
      <Logo />
      <div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={item.id === activeItemId ? 'active' : ''}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </SideBarStyled>
  );
};