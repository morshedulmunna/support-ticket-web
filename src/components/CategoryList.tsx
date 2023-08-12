type Props = {
  customer?: boolean;
  user: {
    name: string;
    id: string;
    roll: string;
    email: string;
  }[];
};

export default function CategoryList({ customer, user }: Props) {
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
                    {customer ? (
                      <>
                        <th className="px-2 py-4">Email</th>
                        <th className="px-2 py-4">Name</th>
                        <th className="px-2 py-4">Roll</th>
                      </>
                    ) : (
                      <th className="px-2 py-4">Name</th>
                    )}

                    <th className="px-2 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {data?.map((each) => (
                    <TableBody key={each.tiket_id} each={each} />
                  ))} */}

                  {user?.map(({ id, name, email, roll }) => (
                    <tr key={id} className="border-b dark:border-neutral-200 ">
                      <td className="whitespace-nowrap   ">{id}</td>
                      {customer ? (
                        <>
                          <tr className="px-2 py-4">{email}</tr>
                          <th className="px-2 py-4 font-normal">{name}</th>
                          <td className="whitespace-nowrap font-medium  ">
                            {roll}
                          </td>
                        </>
                      ) : (
                        <td className="whitespace-nowrap  ">"Sdasdf asdas"</td>
                      )}

                      <td className="whitespace-nowrap py-4 space-x-3 flex items-center">
                        {roll === "customer" ? (
                          <button className="bg-gray-400 px-2 py-1 flex justify-center items-center rounded text-white font-medium hover:bg-orange-400  duration-200 ease-linear">
                            Assistant
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  ))}

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
