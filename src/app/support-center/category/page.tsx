"use client";

import CategoryList from "@/components/CategoryList";
import CreateCategoryForm from "@/components/CreateCategoryForm";
import Search from "@/components/Search";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { Dots } from "react-activity";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
type Props = {};

export default function Category({}: Props) {
  let content;

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const isOpen = useSelector((state: RootState) => state.category.isOpen);
  const { data, error, isLoading, refetch } = useGetAllCategoryQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (data?.length === 0) {
      content = "No Data Found";
    }

    if (error) {
      toast.error("Something Wrong!");
      console.log(error);
    }

    if (isLoading) {
      content = <Dots />;
    }
  }, [data]);

  return (
    <>
      <div>
        <Search level="List of Category _______" category isOpen={isOpen} />
        {!isOpen ? (
          <>
            {isLoading ? (
              <p>Loading..........</p>
            ) : (
              <CategoryList categoryLists={data} />
            )}
            <p className="text-red-500 font-semibold mt-2">{content}</p>
          </>
        ) : (
          <CreateCategoryForm refetch={refetch} />
        )}
      </div>
    </>
  );
}
