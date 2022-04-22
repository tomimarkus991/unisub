import { PlusCircleIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { createPresetSubs, scrollbarStyles, SearchSubYupSchema } from "app-constants";
import {
  Input,
  PresetSubscriptionCard,
  RealButton,
  SubscriptionModal,
  animations,
} from "components/elements";
import { useSubModal } from "context";

import { Modal } from "../modal";

interface FormValues {
  searchString: string;
}
interface Props {
  isIcon?: boolean;
}

export const ChooseSubModal = ({ isIcon = true }: Props) => {
  const { isChooseSubModalOpen, setIsChooseSubModalOpen } = useSubModal();

  const initialValues: FormValues = {
    searchString: "",
  };

  return (
    <Modal
      open={isChooseSubModalOpen}
      setOpen={setIsChooseSubModalOpen}
      modalButton={
        <>
          {isIcon ? (
            <motion.div key="choose-sub-plus-circle" {...animations.scaleAndRotationAnim}>
              <PlusCircleIcon
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => {
                  setIsChooseSubModalOpen(true);
                }}
              />
            </motion.div>
          ) : (
            <RealButton
              onClick={() => {
                setIsChooseSubModalOpen(true);
              }}
            >
              Create sub
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
                <div className="flex flex-row justify-between items-center w-full">
                  <XIcon className="w-8 h-8 opacity-0" />
                  <h3 className="text-lg font-medium leading-6 text-center text-gray-700 uppercase">
                    Add a new Sub
                  </h3>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsChooseSubModalOpen(open => !open)}
                  >
                    <motion.div key="choose-sub-x-icon" {...animations.rotate360Anim}>
                      <XIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                    </motion.div>
                  </div>
                </div>

                <Input
                  name="searchString"
                  type="text"
                  placeholder="Search"
                  className={clsx("px-3 my-2 w-full")}
                />

                <h3 className="text-lg font-medium leading-6 text-left text-gray-400">
                  Popular subscriptions
                </h3>
              </div>
              <div
                className={clsx(
                  scrollbarStyles,
                  "flex overflow-y-auto flex-col px-2 h-[40vh] bg-white"
                )}
              >
                <AnimatePresence initial={false} exitBeforeEnter>
                  {createPresetSubs().map(sub => {
                    return (
                      sub.title.toLowerCase().includes(values.searchString.toLowerCase()) && (
                        <motion.div
                          className="mb-2"
                          key={sub.title}
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
                          <PresetSubscriptionCard subValues={sub} />
                        </motion.div>
                      )
                    );
                  })}
                </AnimatePresence>
              </div>
              <div className="flex sticky bottom-0 z-40 justify-center items-center py-3 px-6 w-full min-h-[4rem] bg-white rounded-b-xl">
                <SubscriptionModal buttonType="real" buttonTitle="Create New" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
