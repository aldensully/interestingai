import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="absolute h-20 p-5 top-0 left-0 w-full flex flex-row justify-between items-center bg-[transparent]">
        <text className="text-lg text-text">iai</text>
        <button className='px-4 py-2 border-solid border-black border-[1px] rounded-full'>
          Submit project
        </button>
      </div>
    </nav>
  );
};
export default Navbar;