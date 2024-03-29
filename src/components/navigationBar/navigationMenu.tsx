import { Menu, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { IoMenuOutline } from "react-icons/io5/index.js";

function navigationMenu(props: { links: { name: string; href: string }[] }) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border dark:border-slate-500 border-1 bg-opacity-20 px-2 py-2  dark:text-white hover:bg-cyaned-500 hover:bg-opacity-30 ">
            <IoMenuOutline className="w-6 h-6" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* <Menu.Items 
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-cyaned-500 text-white" : "dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Works
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items> */}
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-grayed-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {props.links.map((link: any) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? " bg-cyaned-100 dark:bg-cyaned-700 text-white"
                          : "dark:text-white"
                      }group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {link.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default navigationMenu;
