import { useEffect, useRef } from "react";

type Props = {
  data: {
    feedback: string;
    User: {
      id: string;
      name: string;
    };
  }[];
};

export default function SupportReply({ data }: Props) {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <>
      {data?.map((each) => {
        return (
          <div
            ref={chatContainerRef}
            key={each.User?.id}
            className=" mb-6 border  p-2 rounded flex justify-end flex-col  text-sm "
          >
            <div className="flex border-b justify-end pb-2 mb-1 w-fit space-x-2 items-center">
              <div className="w-6 h-6 rounded-full bg-gray-400"></div>
              <p> {each.User?.name} </p>
            </div>

            <p>{each.feedback}</p>
          </div>
        );
      })}
    </>
  );
}
