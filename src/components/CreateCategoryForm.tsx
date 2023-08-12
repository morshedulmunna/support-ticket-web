type Props = {};

export default function CreateCategoryForm({}: Props) {
  return (
    <>
      <div className="mt-4">
        <form action="">
          <div className="mb-4">
            <label htmlFor="category" className="font-[400]">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="border w-full py-2 mt-1 rounded px-1 outline-none text-sm"
              placeholder="Type category name"
            />
          </div>

          {/* Select user List */}

          <div>
            <label htmlFor="category" className="font-[400]">
              Assign to
            </label>
            <input
              type="text"
              id="category"
              className="border w-full py-2 mt-1 rounded px-1 outline-none text-sm"
              placeholder="Select your assistant"
            />

            <button
              className="mt-4 bg-orange-500 px-4 py-1 rounded text-white font-serif hover:bg-orange-500/80 duration-150 ease-linear"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
