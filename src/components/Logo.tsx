import { logo } from '@/assets';
import Image from 'next/image';
import React, { type FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <React.Fragment>
      <Image width={150} src={logo} alt="logo" priority={true} />
    </React.Fragment>
  );
};
export default Logo;
