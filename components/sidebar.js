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
            <a>Home</a>
          </Link>
        </MenuItem>
        <SubMenu title="Fundamentals" icon={<FaRegLaughWink />}>
          <MenuItem>
            <Link href="/introduction-to-accessibility">
              <a>Introduction to Accessibility</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/principles-of-accessible-design">
              <a>Principles of Accessible Design</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/accessibility-guidelines-wcag">
              <a>Accessibility Guidelines (WCAG)</a>
            </Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="About" icon={<FaLightbulb />}>
          <MenuItem>
            <Link href="https://github.com/skalthoff/accessible-web-design">
              <a>GitHub</a>
            </Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
