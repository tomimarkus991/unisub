import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export const SubLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "minscreen:flex overflow-visible flex-col justify-start items-center last:pb-24 h-full",
        "xl:grid-cols-2 sm2:grid sm2:grid-cols-2 sm2:gap-x-2 sm2:pb-0 lg2:grid-cols-3 2xl:grid-cols-3",
        "2xl:max-w-[80rem] md:max-w-[49rem] lg2:max-w-[65rem] m-auto xl:max-w-[49rem] 3xl:max-w-[73.5rem]"
      )}
    >
      {children}
    </div>
  );
};
