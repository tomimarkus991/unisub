import { Dialog } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { presetSubs, SearchSubYupSchema } from "app-constants";
import {
  ScaleAndRotationAnim1,
  RealButton,
  SubscriptionModal,
  Input,
  PresetSubscriptionCard,
  Modal,
} from "components/elements";

interface Props {
  isIcon?: boolean;
}

interface FormValues {
  searchString: string;
}
export const ChooseSubModal = ({ isIcon = true }: Props) => {
  const initialValues: FormValues = {
    searchString: "",
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      open={modalOpen}
      setOpen={setModalOpen}
      modalButton={
        <>
          {isIcon ? (
            <ScaleAndRotationAnim1>
              <PlusCircleIcon
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            </ScaleAndRotationAnim1>
          ) : (
            <RealButton
              onClick={() => {
                setModalOpen(true);
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const { searchString } = values;
          console.log("searchString", searchString);

          resetForm();

          setSubmitting(false);
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <div className="py-5 px-4 max-h-min">
                <div className="flex items-start">
                  <div className="mt-0 w-full">
                    <Dialog.Title
                      as="h3"
                      className="mb-4 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
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
                    <div className="mt-4">
                      <Dialog.Title
                        as="h3"
                        className="mb-2 text-lg font-medium leading-6 text-left text-gray-400"
                      >
                        Popular subscriptions
                      </Dialog.Title>
                      <div
                        key="sub-presets-container"
                        className="grid overflow-auto gap-2 justify-center max-h-[30rem]"
                      >
                        <AnimatePresence initial={false} exitBeforeEnter>
                          {presetSubs.map(sub => {
                            console.log("sub.title.toLowerCase()", sub.title.toLowerCase());
                            console.log(
                              "values.searchString.toLowerCase()",
                              values.searchString.toLowerCase()
                            );

                            return (
                              sub.title
                                .toLowerCase()
                                .includes(values.searchString.toLowerCase()) && (
                                <motion.div
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
                                  // exit={{
                                  //   opacity: 0,
                                  // }}
                                  // animate={{ opacity: 1 }}
                                  // initial={{ opacity: 0 }}
                                  // exit={{ opacity: 0 }}
                                  // transition={{ duration: 0.5 }}
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse justify-center py-3 px-6 bg-gray-50 rounded-b-xl">
                <SubscriptionModal
                  isIcon={false}
                  buttonTitle="Create New"
                  setPreviousModalOpen={setModalOpen}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
