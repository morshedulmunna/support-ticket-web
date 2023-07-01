import { FC } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
type Props = {
  loading?: boolean;
};

const Loading: FC<Props> = ({ loading = true }) => {
  if (!loading) return null;
  return (
    <>
      <div className="h-screen w-full"></div>
      <div className="fixed left-0 top-0 z-[100] grid h-screen w-screen  place-content-center place-items-center bg-slate-900/40 backdrop-blur-[2.2px]">
        <Dots size={25} className="text-white" />
      </div>
    </>
  );
};

export default Loading;
