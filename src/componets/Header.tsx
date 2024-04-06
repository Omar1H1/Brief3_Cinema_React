import React, { useState } from 'react';
import logo from './../assets/images/logoGCR.png';
import HeaderItem from './HeaderItem';
import Menu from './Menu';
import { HiDotsVertical } from 'react-icons/hi';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[150px] md:w-[200px] object-cover" />
        <div className="hidden md:flex gap-8">
          {Menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {Menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={index} name={''} Icon={item.icon} />
              ),
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {Menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  ),
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://cdn.icon-icons.com/icons2/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
