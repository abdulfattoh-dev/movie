import { memo, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../shared/assets/logo.svg';
import { Moon, Sun, House, Film, Search, Bookmark } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate()
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [light]);

  return (
    <header className='h-20 flex'>
      <nav className='container flex justify-between items-center'>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
        <ul className='flex gap-10'>
          <li>
            <NavLink className={({ isActive }) => `flex flex-col items-center gap-1 hover:opacity-60 text-xs font-semibold ${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1] dark:text-black'}`} to={"/"}>
              <House />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `flex flex-col items-center gap-1 hover:opacity-60 text-xs font-semibold ${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1] dark:text-black'}`} to={"/movie"}>
              <Film />
              <span>Movie</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `flex flex-col items-center gap-1 hover:opacity-60 text-xs font-semibold ${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1] dark:text-black'}`} to={"/bookmark"}>
              <Bookmark />
              <span>Saved</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `flex flex-col items-center gap-1 hover:opacity-60 text-xs font-semibold ${isActive ? 'text-[#C61F1F]' : 'text-[#A1A1A1] dark:text-black'}`} to={"/search"}>
              <Search />
              <span>Search</span>
            </NavLink>
          </li>
        </ul>
        <div className='flex gap-5'>
          <button className={`cursor-pointer hover:opacity-60 ${light ? 'text-black' : 'text-[#A1A1A1]'}`} onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</button>
          <button className='px-[66.5px] py-4.5 bg-[#C61F1F] rounded-xl text-white hover:opacity-60' onClick={() => navigate('/login')}>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);