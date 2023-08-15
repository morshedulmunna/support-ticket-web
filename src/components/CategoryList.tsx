import {
  useCategoryDeleteByIDMutation,
  useGetAllCategoryQuery,
} from "@/redux/features/category/categoryApi";
import { useUserDeleteMutation } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
import { BsXSquare } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import ChangeCustomerRoll from "./ChangeCustomerRoll";
import Loading from "./Loading";
import ModalState from "./Modal";

type Props = {
  customer?: boolean;
  user?: {
    name: string;
    id: string;
    roll: string;
    email: string;
  }[];
  categoryLists?: {
    categoryID: string;
    type: string;
  }[];
};

export default function CategoryList({ customer, user, categoryLists }: Props) {
  const [categoryDeleteByID, { error, isLoading, isSuccess }] =
    useCategoryDeleteByIDMutation<any>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<string>("");

  console.log(selectedUser);

  if (isLoading) {
    <Loading />;
  }

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Delete Successfully!");
    }
  }, [isSuccess]);

  const {
    data,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetAllCategoryQuery<any>(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (categoryError) {
    toast.error(categoryError?.data?.message);
  }

  const [userDelete, { data: deleteUser, error: deleteError }] =
    useUserDeleteMutation<any>();

  console.log(deleteUser);
  console.log(deleteError);

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
                    <tr key={id} className="border-b  dark:border-neutral-200 ">
                      <td className="whitespace-nowrap   ">{id}</td>

                      <tr className="px-2 py-4 ">{email}</tr>
                      <th className="px-2 py-4 font-normal">{name}</th>
                      <td className="whitespace-nowrap font-medium  ">
                        {roll}
                      </td>

                      <td className="whitespace-nowrap py-4 space-x-3 flex items-center">
                        {roll === "customer" ? (
                          <button
                            onClick={() => {
                              setIsOpen(true);
                              setSelectedUser(id);
                            }}
                            className="bg-gray-400 px-2 py-1 flex justify-center items-center rounded text-white font-medium hover:bg-orange-400  duration-200 ease-linear"
                          >
                            Change Roll
                          </button>
                        ) : roll === "assistance" ? (
                          <button onClick={() => userDelete(id)}>
                            <TiDeleteOutline size={20} color="red" />
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                  {/* Category List */}
                  {categoryLists?.map(({ categoryID, type }) => (
                    <tr
                      key={categoryID}
                      className="border-b dark:border-neutral-200 "
                    >
                      <td className="whitespace-nowrap pl-2  ">{categoryID}</td>
                      <td className="whitespace-nowrap pl-2 "> {type} </td>

                      <td className="whitespace-nowrap py-4 pl-4 space-x-3 flex items-center">
                        <button onClick={() => categoryDeleteByID(categoryID)}>
                          <BsXSquare color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* End */}
                  <ModalState isOpen={isOpen} onClose={setIsOpen}>
                    <ChangeCustomerRoll
                      selectedUser={selectedUser}
                      data={data}
                      setIsOpen={setIsOpen}
                    />
                  </ModalState>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
