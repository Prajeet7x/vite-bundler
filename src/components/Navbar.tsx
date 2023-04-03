import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="/characters">Characters</a>,
    key: "characters",
  },
  {
    label: <a href="/locations">Locations</a>,
    key: "locations",
  },
  {
    label: <a href="/episodes">Episodes</a>,
    key: "episodes",
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
