import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import PlatformIcon from "components/common/PlatformIcon";

import IndicatorIcon from 'assets/icons/tsx/IndicatorIcon';

const accounts = [
  {
    platform: "notion",
    email: "test@orchid.ai.com"
  },
  {
    platform: "gmail",
    email: "test@orchid.ai.com"
  },
]

export default function Indicator() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-16 lg:right-16">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                shadow-md rounded-full p-4 text-base font-medium 
                bg-white dark:bg-ndex-dark-background-default
                text-black dark:text-white dark:shadow-grey
                hover:bg-ndex-light-background-2
                dark:hover:bg-ndex-dark-background-default-selected
                hover:cursor-pointer
                transition duration-200 ease-in-out
                `}
            >
              <IndicatorIcon  className='w-8 h-8'/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bottom-0 -right-40 w-80 items-center text-center md:w-[450px] lg:w-max z-10 -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-sm dark:shadow-black ring-1 ring-black ring-opacity-5">
                  <div className="grid relative gap-8 p-7
                    bg-white dark:bg-ndex-dark-background-grey
                    text-black dark:text-ndex-dark-text-default
                  ">
                    {accounts.map((account) => (
                      <div
                        key={account.platform + account.email}
                        className="flex items-center rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <PlatformIcon platform={account.platform} size={8} />
                        <div className="flex ml-4 w-full flex-wrap whitespace-normal">
                            Indexing your files at <p className="font-bold ml-2"> {account.email} </p>
                        </div>
                        {/* Add Loading Animation Here */}
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
