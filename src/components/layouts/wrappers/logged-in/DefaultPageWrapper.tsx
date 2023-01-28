import {
  PartialPageWrapper,
  NavbarTop,
  NavbarBottom,
  Sidebar,
  ExpandedSidebarContent,
  SmallSidebarContent,
  SidebarLink,
  SidebarIconLink,
} from "@redlotus/ui";
import { HiLogout } from "react-icons/hi";

import { NavbarBottomContent } from "components";
import { routes } from "routes";

interface Props {
  children: React.ReactNode;
  RightSide?: React.ReactNode;
}

export const DefaultPageWrapper = ({ children, RightSide }: Props) => {
  const appLogo = "/icons/favicon.svg";
  const avatar = "/general/avatar.svg";
  const username = "Galaxy";

  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username, email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={
        <Sidebar
          ExpandedSidebarContent={
            <ExpandedSidebarContent
              routes={routes}
              appLogo={appLogo}
              BottomContent={
                <>
                  <div className="flex flex-row items-center px-4 space-x-3">
                    <img className="w-14 h-14" alt="user" src={avatar} />
                    <p className="text-xl font-semibold">{username}</p>
                  </div>
                  <SidebarLink
                    onClick={() => console.log("logout")}
                    icon={<HiLogout className="mr-3 w-8 h-8 fill-inherit" />}
                  >
                    Logout
                  </SidebarLink>
                </>
              }
            />
          }
          SmallSidebarContent={
            <SmallSidebarContent
              routes={routes}
              appLogo={appLogo}
              BottomContent={
                <>
                  <img className="w-14 h-14" alt="user" src={avatar} />
                  <SidebarIconLink
                    onClick={() => console.log("logout")}
                    tooltip="logout"
                    icon={<HiLogout className="w-8 h-8 fill-inherit" />}
                  />
                </>
              }
            />
          }
        />
      }
      RightSide={
        <div className="minscreen:hidden min-w-[20rem] flex-col items-center py-8 px-4 xl:flex 2xl:min-w-[24rem]">
          {RightSide}
        </div>
      }
    >
      {children}
    </PartialPageWrapper>
  );
};
