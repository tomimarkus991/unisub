import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlusCircle } from "react-icons/all";

import { createPresetSubs, scrollbarStyles, SearchSubYupSchema } from "app-constants";
import {
  Input,
  PresetSubscriptionCard,
  RealButton,
  SubscriptionModal,
  animations,
  ModalHeaderClose,
  Modal,
  ModalFooterContainer,
} from "components";
import { useSubModal } from "context";

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
      maxWidth="lg"
      modalButton={
        <>
          {isIcon ? (
            <motion.div key="choose-sub-plus-circle" {...animations.scaleAndRotationAnim}>
              <HiPlusCircle
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
              <div className="flex sticky z-40 flex-col items-center px-4 mb-3 w-full min-h-[9rem] rounded-t-xl">
                <ModalHeaderClose setOpen={setIsChooseSubModalOpen}>Add a new Sub</ModalHeaderClose>

                <Input
                  name="searchString"
                  type="text"
                  placeholder="Search"
                  className={clsx("px-3 my-2 w-full")}
                />
                <h3 className="text-lg font-medium leading-6 text-gray-400">
                  Popular subscriptions
                </h3>
              </div>
              <div className={clsx(scrollbarStyles, "flex overflow-y-auto flex-col px-2 h-[40vh]")}>
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
              <ModalFooterContainer>
                <SubscriptionModal buttonType="real" buttonTitle="Create New" />
              </ModalFooterContainer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
