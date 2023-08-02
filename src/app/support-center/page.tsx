import { type FC } from "react";

interface SupportCenterProps {}

const SupportCenter: FC<SupportCenterProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-5">
        {/* Gretings */}
        <div className="col-span-4">
          <div className=" p-3 rounded-md shadow-sm border border-orange-200">
            <p className="text-xl mb-1 font-semibold text-orange-500">
              Congratulations Jon
            </p>
            <p className="text-sm">
              We believe in helping youMake. Happy. Customers.Easily scale and
              streamline your customer service and drastically improve your
              customer’s experience.
            </p>

            {/* <button className="border border-orange-500 hover:bg-orange-500 duration-200 ease-linear hover:text-white my-2 text-sm px-2  rounded">
              Contact us
            </button> */}
          </div>
        </div>
        <div className="col-span-1">card</div>
      </div>
    </>
  );
};
export default SupportCenter;
