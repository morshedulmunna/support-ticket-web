type Props = {};

export default function FeedbackForm({}: Props) {
  return (
    <form action="">
      <textarea
        name=""
        id=""
        cols={30}
        rows={4}
        className="border resize-none rounded outline-none text-sm p-2 w-full"
        placeholder="Reply here...."
      ></textarea>
      <div className="flex justify-end items-center">
        <button className=" bg-orange-500 hover:bg-orange-500/80 duration-200 ease-linear px-6 py-1 rounded text-white">
          Message
        </button>
      </div>
    </form>
  );
}
