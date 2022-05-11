import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export const SubLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "flex overflow-auto flex-col justify-center items-center last:pb-24 h-full",
        "justify-self-center self-center m-auto sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pb-0 md:max-w-[50rem] xl:grid-cols-2 2xl:grid-cols-3 2xl:max-w-[80rem]"
      )}
    >
      {children}
    </div>
  );
};
