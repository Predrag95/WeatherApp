import classes from './Sidebar.module.scss';

import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsBuildings } from 'react-icons/bs';
import { CiMap } from 'react-icons/ci'
import { VscSettings } from 'react-icons/vsc';

const Sidebar = () => {
  const renderSidebarItems = () => {
    const items = [
      { Icon: TiWeatherPartlySunny, text: 'Weather' },
      { Icon: BsBuildings, text: 'Cities' },
      { Icon: CiMap, text: 'Map' },
      { Icon: VscSettings, text: 'Settings' },
    ];

    return items?.map(({ Icon, text }, index) => (
      <div key={`${text}_${index}`}>
        <div><Icon /></div>
        <div>{text}</div>
      </div>
    ))
  };

  return (
    <div className={classes.container}>
      {renderSidebarItems()}
    </div>
  )
};

export default Sidebar;