type Props = {
  status: string;
};

export default function FeedbackForm({ status }: Props) {
  return (
    <form action="">
      <textarea
        disabled={status === "close"}
        name=""
        id=""
        cols={30}
        rows={4}
        className="border resize-none rounded outline-none text-sm p-2 w-full"
        placeholder="Reply here...."
      ></textarea>
      <div className="flex justify-end items-center">
        <button
          disabled={status === "close"}
          className={`py-1 px-12 text-white rounded duration-150 ease-linear ${
            status === "close"
              ? "bg-gray-400"
              : "bg-orange-500  hover:bg-orange-400"
          } `}
        >
          Message
        </button>
      </div>
    </form>
  );
}
