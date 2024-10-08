import MenuTree from "./menuTree";

const menuLeft = () => {
  return (
    <div>
      <div className="text-sm">
        <button className="bg-black text-white p-2 mt-2 rounded-2xl w-[8rem]">
          Expand All
        </button>
        <button className="bg-gray-100 text-black p-2 mt-2 ml-2 rounded-2xl w-[8rem]">
          Collapse All
        </button>
      </div>
      <div className="mt-4">
        <MenuTree />
      </div>
    </div>
  );
};

export default menuLeft;