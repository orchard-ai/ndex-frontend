import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import React, { Fragment, useState, useEffect } from 'react'
import CloseIcon from 'assets/icons/tsx/CloseIcon';

type PropType =  {
  title?:  React.ReactNode
  buttonContent?: React.ReactNode
  buttonClassName?: React.ComponentProps<'div'>['className']
  buttonContainerClassName?: React.ComponentProps<'div'>['className']
  content?: React.ReactNode
  headerContent? : React.ReactNode
}

export default function Dialog({
  title,
  buttonContent,
  buttonClassName,
  buttonContainerClassName,
  content,
  headerContent,
  } : PropType) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className={`${buttonContainerClassName}`}>
        <button
            type="button"
            onClick={openModal}
            className={`${buttonClassName}`}
          >
          {buttonContent}
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black opacity-100 bg-opacity-25" />
          </Transition.Child>

          <div className="absolute z-10 top-0 bottom-0 right-0 left-0 w-screen h-screen bg-opacity-50 bg-black opacity-50"/>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <HeadlessDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-ndex-background-4  p-6 text-left align-middle shadow-xl transition-all">
                  <HeadlessDialog.Title
                    as="h3"
                    className="flex w-full text-lg font-medium justify-between text-ndex-text-white mb-4"
                  >
                    {title}
                    {headerContent}
                    <button
                      onClick={closeModal}
                    >
                      <CloseIcon className="
                        absolute top-6 right-4 w-8 h-8
                      stroke-ndex-text-white
                      hover:stroke-ndex-text-grey
                      active:stroke-ndex-text-grey-variant
                      " />
                    </button>
                  </HeadlessDialog.Title>
                  {content}
                </HeadlessDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HeadlessDialog>
      </Transition>
    </>
  )
}