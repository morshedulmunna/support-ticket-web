import Image from 'next/image';
import React, { type FC } from 'react';
import logo from '../../../public/logo.png';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <React.Fragment>
      <Image width={150} src={logo} alt="logo" />
    </React.Fragment>
  );
};
export default Logo;
