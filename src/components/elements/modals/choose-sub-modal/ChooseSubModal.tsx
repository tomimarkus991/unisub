import { Dialog } from "@headlessui/react";
import { PlusCircleIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { presetSubs, scrollbarStyles, SearchSubYupSchema } from "app-constants";
import {
  Input,
  PresetSubscriptionCard,
  RealButton,
  Rotate360Anim,
  ScaleAndRotationAnim1,
  SubscriptionModal,
} from "components/elements";

import { Modal } from "../modal";

interface FormValues {
  searchString: string;
}
interface Props {
  isIcon?: boolean;
}

export const ChooseSubModal = ({ isIcon = true }: Props) => {
  const [open, setOpen] = useState(false);

  const initialValues: FormValues = {
    searchString: "",
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      modalButton={
        <>
          {isIcon ? (
            <ScaleAndRotationAnim1>
              <PlusCircleIcon
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </ScaleAndRotationAnim1>
          ) : (
            <RealButton
              onClick={() => {
                setOpen(true);
              }}
            >
              Create new subscription
            </RealButton>
          )}
        </>
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SearchSubYupSchema}
        validateOnMount
        onSubmit={(_, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          resetForm();

          setSubmitting(false);
        }}
      >
        {({ values }) => {
          return (
            <Form className="flex flex-col">
              <div className="flex sticky z-40 flex-col items-center mb-3 w-full min-h-[9rem] rounded-t-xl">
                <div className="flex flex-row justify-between items-center p-4 w-full">
                  <XIcon className="w-8 h-8 opacity-0" />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                  >
                    Add a new Subscription
                  </Dialog.Title>
                  <div role="button" tabIndex={0} onClick={() => setOpen(open => !open)}>
                    <Rotate360Anim>
                      <XIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                    </Rotate360Anim>
                  </div>
                </div>

                <div className="flex flex-row">
                  <Input
                    name="searchString"
                    type="text"
                    placeholder="Search"
                    className={clsx("px-3 w-full")}
                  />
                </div>

                <Dialog.Title
                  as="h3"
                  className="mt-2 text-lg font-medium leading-6 text-left text-gray-400"
                >
                  Popular subscriptions
                </Dialog.Title>
              </div>
              <div
                className={clsx(
                  scrollbarStyles,
                  "flex overflow-y-auto flex-col px-2 h-[40vh] bg-white"
                )}
              >
                <AnimatePresence initial={false} exitBeforeEnter>
                  {presetSubs.map(sub => {
                    return (
                      sub.title.toLowerCase().includes(values.searchString.toLowerCase()) && (
                        <motion.div
                          className="mb-2"
                          key={"sub-card-" + sub.id}
                          initial={{ y: "-50vh", opacity: 0 }}
                          animate={{
                            y: "0",
                            opacity: 1,
                            transition: {
                              type: "spring",
                              duration: 1,
                              bounce: 0.1,
                            },
                          }}
                        >
                          <PresetSubscriptionCard
                            title={sub.title}
                            category={sub.category}
                            cardColor={sub.color}
                          />
                        </motion.div>
                      )
                    );
                  })}
                </AnimatePresence>
              </div>
              <div className="flex sticky bottom-0 z-40 justify-center items-center py-3 px-6 w-full min-h-[4rem] bg-white rounded-b-xl">
                <SubscriptionModal
                  isIcon={false}
                  buttonTitle="Create New"
                  setPreviousModalOpen={setOpen}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
