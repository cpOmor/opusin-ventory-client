import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Sidebar } from "./Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const user = useAppSelector(selectCurrentUser);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          className="relative select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
          data-popover-target="notifications-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        placeholder={""}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div className={`max-h-[768px] w-full  outline-none`}>
      <div className="ml-2">
        <div className="">
          <Sidebar
            isDrawerOpen={isDrawerOpen}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
          />
        </div>
      </div>
      <Navbar
        placeholder={""}
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <Typography
                placeholder={""}
                as="a"
                href="/"
                className="mr-4 cursor-pointer py-1.5 font-medium flex"
              >
                <img
                  src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                  alt="brand"
                  className="h-8 w-8"
                />
                <Typography
                  placeholder={""}
                  variant="h5"
                  color="blue-gray"
                  className="ml-2"
                >
                  Opus Inventory
                </Typography>
              </Typography>

              {/* sidebar button */}

              <IconButton
                placeholder={""}
                variant="text"
                size="lg"
                onClick={openDrawer}
              >
                {isDrawerOpen ? (
                  <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                  <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
              </IconButton>
            </div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>

              {user ? (
                <>
                  {/*  user profile */}

                  <div className="flex justify-end items-center">
                    <img
                      className="h-12 w-12 object-cover object-center rounded-md"
                      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                      alt="nature image"
                    />
                    <div className="text-back ml-2">
                      <h4 className="text-[#1e293b] text-2xl font-bold">
                        {user?.name}
                      </h4>
                      <h4 className="text-[#8a939b] text-[14px]">
                        {user?.role}
                      </h4>
                    </div>
                    <button className="text-back ml-2 bg-[#5d5dee] text-white rounded-lg border w-12 flex justify-between items-center h-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* user login button */}
                  <div className="flex items-center gap-x-1">
                    <Typography
                      placeholder={""}
                      as="a"
                      href="/sign-in"
                      className="hidden lg:inline-block"
                    >
                      <Button
                        placeholder={""}
                        size="sm"
                        className="hidden lg:inline-block bg-white text-black"
                      >
                        <span>Sign in</span>
                      </Button>
                    </Typography>
                    <Typography
                      placeholder={""}
                      as="a"
                      href="/sign-up"
                      className="hidden lg:inline-block"
                    >
                      <Button
                        placeholder={""}
                        size="sm"
                        className="hidden lg:inline-block"
                      >
                        <span>Sign Up</span>
                      </Button>
                    </Typography>
                  </div>
                </>
              )}

              <IconButton
                placeholder={""}
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>

        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              placeholder={""}
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <span>Log In</span>
            </Button>
            <Button
              placeholder={""}
              fullWidth
              variant="gradient"
              size="sm"
              className=""
            >
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <>{Outlet}</>
    </div>
  );
}
