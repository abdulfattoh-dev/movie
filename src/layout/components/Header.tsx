import { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../shared/assets/logo.svg';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [light]);

  return (
    <header className='h-20 flex'>
      <nav className='container flex justify-between items-center'>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className='flex text-[#A1A1A1]'>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/movie"}>Movie</NavLink>
          </li>
        </ul>
        <button className='cursor-pointer text-[#A1A1A1]' onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</button>
      </nav>
    </header>
  );
};

export default memo(Header);