import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export const SubLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "flex overflow-auto flex-col justify-center items-center last:pb-24 h-full",
        "sm:grid sm:grid-cols-2 sm:gap-x-2 xl:grid-cols-2"
      )}
    >
      {children}
    </div>
  );
};
