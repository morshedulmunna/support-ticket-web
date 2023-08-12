import { MdClose } from "react-icons/md";

type Props = {
  customer?: boolean;
};

export default function CategoryList({ customer }: Props) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th className="px-2 py-4">#</th>
                    {customer && <th className="px-2 py-4">Email</th>}
                    <th className="px-2 py-4">Name</th>

                    <th className="px-2 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {data?.map((each) => (
                    <TableBody key={each.tiket_id} each={each} />
                  ))} */}
                  <tr className="border-b dark:border-neutral-200 font-[400]">
                    <td className="whitespace-nowrap   ">#d2347fskjdfho</td>
                    {customer && <tr className="px-2 py-4">munna@gmail.com</tr>}
                    <td className="whitespace-nowrap  ">"Sdasdf asdas"</td>

                    <td className="whitespace-nowrap py-4 space-x-3 flex items-center">
                      <button
                        // onClick={() => ticketDeleteByID(each.tiket_id)}
                        className="bg-red-400 h-4 w-4 flex justify-center items-center rounded text-white font-medium hover:bg-red-600  duration-200 ease-linear"
                      >
                        <MdClose size={18} />
                      </button>
                    </td>
                  </tr>
                  {/* End */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
