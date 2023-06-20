import { Link, NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import { ExeIcon } from '../Components/Icons/Exercises';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="CV">
              {' '}
              <PersonalCardIcon className="menu-icon" />
              Moje cv
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              {' '}
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              {' '}
              <ElementIcon className="menu-icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              {' '}
              <ExeIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Calendar">
              {' '}
              <CalendarIcon className="menu-icon" />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="settings">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FAQIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
