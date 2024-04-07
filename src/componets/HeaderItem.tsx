import React from 'react';

interface HeaderItemProps {
  name: string;
  Icon: React.ComponentType<any>;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;
