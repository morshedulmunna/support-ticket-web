import { global, hero } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { FcDataConfiguration } from 'react-icons/fc';
import { GrServices } from 'react-icons/gr';
import { MdDashboard, MdOutlineSupportAgent } from 'react-icons/md';
import { BiSpreadsheet } from 'react-icons/bi';

export default function Home() {
  return (
    <main className="">
      <div className="containers">
        {/* Hero */}
        <div className="flex flex-col my-8 justify-center items-center">
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
            href={'/login'}>
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
                key={each.id}>
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

      <div className="containers flex gap-6 items-center justify-center flex-col-reverse lg:flex-row">
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
              '5+ million spTalk users worldwide',
              '15,000+ businesses use spTalk worldwide',
              ' osTicket seamlessly routes inquiries created via email, web-forms and API.',
              'Simple and easy-to-use web-based customer support platform.',
              ' osTicket comes packed with more features and tools than most of the expensive (and complex) support ticket systems on the market.',
              'The best part is that osTicket is completely free.',
            ].map((each, index) => (
              <li className="py-1" key={index}>
                {each}
              </li>
            ))}
          </ul>

          <Link
            className="bg-orange-500 px-12 mb-12 py-2 rounded-full text-white font-semibold my-6"
            href={'/login'}>
            Get Started
          </Link>
        </div>
        <div>
          <Image src={global} alt="global" />
        </div>
      </div>
    </main>
  );
}

const data = [
  {
    id: 1,
    level: 'Dashboard Report',
    description:
      'Our rich and simple dashboard keeps you up-to-date on your help desk statistics',
    icon: <MdDashboard size={45} color="orange" />,
  },
  {
    id: 2,
    level: 'Configurable Help Topic',
    description:
      'Add, edit, and delete your help desk topics that suit your preference',
    icon: <FcDataConfiguration size={45} color="orange" />,
  },
  {
    id: 3,
    level: 'Service Level Agreementss',
    description:
      'Simply set your business hours and our system will handle the rest leaving you worry-free',
    icon: <GrServices size={45} color="orange" />,
  },
  {
    id: 4,
    level: 'Ticket Filters',
    description:
      'Our powerful ticket filtering system makes sure the right tickets goes to the right department leaving you with a clutter-free environment',
    icon: <BiSpreadsheet size={45} color="orange" />,
  },
  {
    id: 5,
    level: 'Customer Support Portal',
    description:
      'Robust customer support portal system to help your business maintain happy customer relationships',
    icon: <MdOutlineSupportAgent size={45} color="orange" />,
  },
  {
    id: 6,
    level: 'And Much More!',
    description:
      'spTalk comes pack with tons of awesome features you have to try out yourself',
    icon: <MdOutlineSupportAgent size={45} color="orange" />,
  },
];
