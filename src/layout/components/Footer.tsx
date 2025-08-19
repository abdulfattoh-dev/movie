import { memo } from 'react';
import emblem from '../../shared/assets/emblem.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container bg-[#111111] rounded-xl'>
        <div className='flex p-[30px]'>
          <div>
            <div>
              <img src={emblem} alt="" />
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);