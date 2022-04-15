import { Dialog } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { presetSubs, scrollbarStyles, SearchSubYupSchema } from "app-constants";
import {
  Input,
  PresetSubscriptionCard,
  RealButton,
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
            <Form className="flex flex-col h-[88vh]">
              <div className="flex sticky top-0 flex-col items-center pt-4 pb-1 w-full bg-white rounded-t-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                >
                  Add a new Subscription
                </Dialog.Title>

                <div className="mt-4">
                  <div className="flex flex-row">
                    <Input
                      name="searchString"
                      type="text"
                      placeholder="Search"
                      className={clsx("px-3 w-full")}
                    />
                  </div>
                </div>
                <Dialog.Title
                  as="h3"
                  className="mt-2 text-lg font-medium leading-6 text-left text-gray-400"
                >
                  Popular subscriptions
                </Dialog.Title>
              </div>
              <div className={clsx(scrollbarStyles, "inline-flex overflow-y-auto flex-col px-2")}>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {presetSubs.map(sub => {
                    return (
                      sub.title.toLowerCase().includes(values.searchString.toLowerCase()) && (
                        <motion.div
                          className="first:pt-2 last:pb-[4.5rem] mb-2"
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
              <div className="flex fixed bottom-0 flex-row-reverse justify-center py-3 px-6 w-full bg-gray-50 rounded-b-xl">
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
