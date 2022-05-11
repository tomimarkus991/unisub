import { NavbarBottom, NavbarTop, Sidebar } from "components";
import { useIsMobile } from "hooks";

interface Props {
  children: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const DefaultWrapper = ({ children, rightSide }: Props) => {
  const { isMobile } = useIsMobile();
  return (
    <>
      {isMobile ? (
        <>
          <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
            <div className="flex flex-col w-full h-full">
              <NavbarTop
                user={{ id: "1", username: "Galaxy", email: "galaxy@gmail.com", avatar: null }}
              />
              <div className="mx-4 sm:mx-0">{children}</div>
              <NavbarBottom />
            </div>
          </div>
          <Sidebar />
        </>
      ) : (
        <div className="flex w-full min-h-screen bg-slate-50 dark:bg-slate-800">
          <div className="flex justify-start">
            <Sidebar />
          </div>
          <div className="flex flex-col justify-center px-4 w-full">{children}</div>
          {rightSide && (
            <div className="hidden flex-col items-center p-4 min-w-[20rem] shadow-lg xl:flex 2xl:min-w-[24rem]">
              {rightSide}
            </div>
          )}
        </div>
      )}
    </>
  );
};
