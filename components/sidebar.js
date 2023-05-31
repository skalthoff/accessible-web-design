// components/Sidebar.js

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title="Web Accessibility" icon={<FaRegLaughWink />}>
          <MenuItem>Color Contrast</MenuItem>
          <MenuItem>Keyboard Navigation</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
