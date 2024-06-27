/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

export function Sidebar(sidebar : any) {

  const { isDrawerOpen, closeDrawer } = sidebar

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  // const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Drawer placeholder={""} open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          placeholder={""}
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-2">
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
          </div>
          <div className="p-2">
            <Input
              crossOrigin={"*"}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List placeholder={""}>
            <Accordion
              placeholder={""}
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem placeholder={""} className="p-0" selected={open === 1}>
                <AccordionHeader
                  placeholder={""}
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix placeholder={""}>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={""}
                    color="blue-gray"
                    className="mr-auto font-normal"
                  >
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List placeholder={""} className="p-0">
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              placeholder={""}
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem placeholder={""} className="p-0" selected={open === 2}>
                <AccordionHeader
                  placeholder={""}
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix placeholder={""}>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={""}
                    color="blue-gray"
                    className="mr-auto font-normal"
                  >
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List placeholder={""} className="p-0">
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem placeholder={""}>
                    <ListItemPrefix placeholder={""}>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem placeholder={""}>
              <ListItemPrefix placeholder={""}>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix placeholder={""}>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem placeholder={""}>
              <ListItemPrefix placeholder={""}>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem placeholder={""}>
              <ListItemPrefix placeholder={""}>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem placeholder={""} onClick={handleLogOut}>
              <ListItemPrefix placeholder={""}>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography placeholder={""} variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography
              placeholder={""}
              variant="small"
              className="font-normal opacity-80"
            >
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                placeholder={""}
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                placeholder={""}
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert>
        </Card>
      </Drawer>
    </>
  );
}
