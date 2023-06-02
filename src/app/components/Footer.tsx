import React, { type FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="bg-gray-900 mt-12">
        <div className="containers py-12">
          <div>
            <h3 className="text-white text-3xl">Make Happy Customers</h3>
            <p className="my-5 text-sm text-gray-400">
              osTicket is a widely used and trusted open source support
              ticketing system. Easily scale and streamline your customer
              service and drastically improve your customer's experience.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="containers">
          <p className="text-xs py-2">
            Copyright © 2023 osTicket.com, an Enhancesoft product
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
