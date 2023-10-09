import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";



const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="text-xl text-gray-300 ml-2 font-semi-bold">Welcome back, Anu👋</h1>
      <div className="py-2 ">
        <TextInput  icon={SearchIcon} placeholder="Search..." className="rounded-lg bg-white ml-1 "/>
      </div>
    </div>
  );
};

export default Navbar;