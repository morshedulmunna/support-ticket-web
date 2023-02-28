import React from "react";

type Props = {};

const SubmitFeedback = (props: Props) => {
  return (
    <div>
      <form action="">
        <textarea
          className="mt-4 w-full rounded-md border"
          name=""
          id=""
          cols={30}
          rows={6}
        ></textarea>
        <input
          type="submit"
          value="Submit Feedback"
          className="mt-2 mb-6 w-full cursor-pointer rounded bg-blue-500 py-2 font-medium text-white duration-300 hover:bg-blue-400"
        />
      </form>
    </div>
  );
};

export default SubmitFeedback;
