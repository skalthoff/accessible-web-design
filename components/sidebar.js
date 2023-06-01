// components/Sidebar.js

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaLightbulb } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>
          <Link href="/">
            Home
          </Link>
        </MenuItem>
        <SubMenu title="Fundamentals" icon={<FaRegLaughWink />}>
          <MenuItem>
            <Link href="/introduction-to-accessibility">
              Introduction to Accessibility
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/principles-of-accessible-design">
              Principles of Accessible Design
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/accessibility-guidelines-wcag">
              Accessibility Guidelines (WCAG)
            </Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="About" icon={<FaLightbulb />}>
          <MenuItem>
            <Link href="https://github.com/skalthoff/accessible-web-design">
              GitHub
            </Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
