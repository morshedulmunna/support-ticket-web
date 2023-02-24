import React from "react";

const page = () => {
  return (
    <div className="view">
      <p className="mb-6 text-lg">Add new Task</p>
      <div>
        <form className="flex flex-col space-y-2" action="">
          <input
            className="rounded-md border px-2 py-2 text-sm"
            type="text"
            placeholder="Title of the tickets"
          />
          <input
            className="rounded-md border px-2 py-2 text-sm"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="rounded-md border px-2 py-2 text-sm"
            type="text"
            name=""
            cols="30"
            rows="10"
            placeholder="Problem details"
          ></textarea>
          <input
            className="cursor-pointer rounded-md bg-blue-100 px-2 py-2 font-bold text-blue-500 duration-300 hover:bg-blue-300"
            type="Submit"
            defaultValue={"Submit Tickets"}
          />
        </form>
      </div>
    </div>
  );
};

export default page;
