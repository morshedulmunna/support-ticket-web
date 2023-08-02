type Props = {};

export default function UserReply({}: Props) {
  return (
    <>
      <div className="mb-6 border  p-2 rounded w-[80%] text-sm">
        <div className="flex border-b pb-2 mb-1 w-fit space-x-2 items-center">
          <div className="w-6 h-6 rounded-full bg-gray-400"></div>
          <p>Morshedul Munna</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          nulla fugiat hic enim impedit expedita. Delectus ducimus officiis
          nesciunt temporibus?{" "}
        </p>
      </div>
    </>
  );
}
