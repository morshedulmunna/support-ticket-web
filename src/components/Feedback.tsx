'use client';

import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';

type Props = {
  singleFeedback: {
    feedback_Id: React.Key | null | undefined;
    feedback: string;
  };
};

const Feedback = ({ singleFeedback }: any) => {
  const { feedback } = singleFeedback;

  const [user, setUser] = useState<any>({});

  return (
    <>
      <div className="mt-6 flex   items-center justify-between space-x-12 border-b-[1px]  border-gray-100 pb-1 text-sm">
        <div className="flex items-center space-x-1 text-blue-500  ">
          <FaUsers size={16} />
          <span>{user?.foundUser?.name}</span>
        </div>
        <div className="flex items-center space-x-1 text-[12px] text-gray-500">
          <AiOutlineFieldTime size={16} />
          <span>0 mins ago</span>
        </div>
      </div>

      <p className="mt-2 mb-8 text-sm">{feedback}</p>

      {/* ==================== */}
    </>
  );
};

export default Feedback;
