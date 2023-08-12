import CategoryList from "@/components/CategoryList";
import Search from "@/components/Search";

type Props = {};

export default function Customer({}: Props) {
  let isLoading = false;
  let errors = "No Customer Found";

  return (
    <div>
      {" "}
      <Search level="List of Customer _______" />
      {isLoading ? <p>Loading..........</p> : <CategoryList customer />}
      <p className="text-red-500 font-semibold mt-2">{errors}</p>
    </div>
  );
}
