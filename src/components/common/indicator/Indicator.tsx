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
    <div className="top-16 px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
              <Popover.Panel className="absolute -left-40 w-max z-10 mt-2 -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="grid relative gap-8 bg-white p-7">
                    {accounts.map((account) => (
                      <div
                        key={account.platform + account.email}
                        className="flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <PlatformIcon platform={account.platform} size={8} />
                        <div className="flex ml-4 w-full flex-wrap whitespace-normal">
                            Indexing your files at <p className="font-bold ml-2"> {account.email} </p>
                        </div>
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
