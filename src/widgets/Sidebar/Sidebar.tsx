"use client";
import React from "react";
import "./Sidebar.scss";
import MenuIcon from '@/shared/assets/icon/menu.svg';
import HintIcon from '@/shared/assets/icon/hint.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <MenuIcon />
      </div>
      <div className="sidebar__logo">
        <HintIcon />
      </div>

    </aside>
  );
};

export default Sidebar;