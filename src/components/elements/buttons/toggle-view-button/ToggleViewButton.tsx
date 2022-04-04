import { MenuIcon, ViewGridIcon } from "@heroicons/react/solid";

export const ToggleViewButton = () => {
  return (
    <div className="hidden flex-1 justify-end px-4 sm:flex">
      <button className="p-1 mr-2 rounded-lg border-4 border-gray-600">
        <MenuIcon className="w-7 h-7 fill-gray-700" />
      </button>
      <button className="p-1 rounded-lg border-4 border-gray-600">
        <ViewGridIcon className="w-7 h-7 fill-gray-700" />
      </button>
    </div>
  );
};
