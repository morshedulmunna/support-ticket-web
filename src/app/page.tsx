import { global, hero } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { BiSpreadsheet } from "react-icons/bi";
import { FcDataConfiguration } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";

export default function Home() {
  return (
    <main className="">
      <div className="containers">
        {/* Hero */}
        <div
          id="home"
          className="flex   flex-col my-8 justify-center items-center"
        >
          <h1 className=" text-center font-semibold text-black text-2xl lg:text-4xl  md:w-[80%] w-full mx-auto xl:leading-[60px]">
            Get The World Most Popular Customer Support Software
          </h1>
          <p className="text-center md:w-[80%] w-full mx-auto py-4">
            We believe in helping you
            <span className="text-orange-500 px-2 font-semibold">
              Make. Happy. Customers.
            </span>
            Easily scale and streamline your customer service and drastically
            improve your customer’s experience.
          </p>

          <Link
            className="bg-orange-500 px-6 py-2 rounded-full text-white font-semibold my-6"
            href={"/login"}
          >
            Get Started
          </Link>
          <Image src={hero} alt="hero"></Image>
        </div>
        {/* Hero End */}
      </div>
      {/* How to use it */}
      <div id="features" className="w-full bg-slate-50 my-6">
        <p className="py-12 text-black text-2xl font-semibold text-center">
          SOME OF OUR FEATURES
        </p>

        <div className="containers">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-6">
            {data.map((each) => (
              <div
                className=" flex flex-col  items-center p-2 space-y-2 h-44 w-60 mx-auto"
                key={each.id}
              >
                {each.icon}
                <h3 className="text-black text-xl whitespace-nowrap font-semibold">
                  {each.level}
                </h3>
                <p className="text-sm">{each.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* How to use it End */}
      <div className="containers mb-12 flex gap-6 items-center justify-center flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl text-black font-semibold pb-6">
            We are not the only ones excited about spTalk...
          </h3>
          <p className="pb-6">
            Thousands of customers in over 190 countries trust and use spTalk
            for customer support.
          </p>

          <ul className="list-disc ml-6 mb-6">
            {[
              "5+ million spTalk users worldwide",
              "15,000+ businesses use spTalk worldwide",
              " spTalk seamlessly routes inquiries created via email, web-forms and API.",
              "Simple and easy-to-use web-based customer support platform.",
              " spTalk comes packed with more features and tools than most of the expensive (and complex) support ticket systems on the market.",
              "The best part is that spTalk is completely free.",
            ].map((each, index) => (
              <li className="py-1" key={index}>
                {each}
              </li>
            ))}
          </ul>

          <Link
            className="bg-orange-500 px-12 mb-12 py-2 rounded-full text-white font-semibold my-6"
            href={"/login"}
          >
            Get Started
          </Link>
        </div>
        <div>
          <Image src={global} alt="global" />
        </div>
      </div>

      {/*  */}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-orange-500">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const data = [
  {
    id: 1,
    level: "Dashboard Report",
    description:
      "Our rich and simple dashboard keeps you up-to-date on your help desk statistics",
    icon: <MdDashboard size={45} color="orange" />,
  },
  {
    id: 2,
    level: "Configurable Help Topic",
    description:
      "Add, edit, and delete your help desk topics that suit your preference",
    icon: <FcDataConfiguration size={45} color="orange" />,
  },
  {
    id: 3,
    level: "Service Level Agreementss",
    description:
      "Simply set your business hours and our system will handle the rest leaving you worry-free",
    icon: <GrServices size={45} color="orange" />,
  },
  {
    id: 4,
    level: "Ticket Filters",
    description:
      "Our powerful ticket filtering system makes sure the right tickets goes to the right department leaving you with a clutter-free environment",
    icon: <BiSpreadsheet size={45} color="orange" />,
  },
  {
    id: 5,
    level: "Customer Support Portal",
    description:
      "Robust customer support portal system to help your business maintain happy customer relationships",
    icon: <MdOutlineSupportAgent size={45} color="orange" />,
  },
  {
    id: 6,
    level: "And Much More!",
    description:
      "spTalk comes pack with tons of awesome features you have to try out yourself",
    icon: <MdOutlineSupportAgent size={45} color="orange" />,
  },
];
