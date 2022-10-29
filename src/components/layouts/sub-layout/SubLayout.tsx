import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export const SubLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "minscreen:flex overflow-visible flex-col justify-start items-center last:pb-24 h-full",
        "2sm:grid 2sm:grid-cols-2 2sm:gap-x-2 2sm:pb-0 xl:grid-cols-2 2lg:grid-cols-3 2xl:grid-cols-3",
        "2xl:max-w-[80rem] md:max-w-[49rem] 2lg:max-w-[65rem] m-auto xl:max-w-[49rem] 3xl:max-w-[73.5rem]"
      )}
    >
      {children}
    </div>
  );
};
