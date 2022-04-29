import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { HiPlusCircle } from "react-icons/all";

import { createPresetSubs, SearchSubYupSchema } from "app-constants";
import {
  Input,
  PresetSubscriptionCard,
  RealButton,
  SubscriptionModal,
  animations,
  ModalHeader,
  Modal,
  ModalFooterContainer,
  AnimationWrapper,
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
            <AnimationWrapper
              keyIndex="choose-modal-plus-icon"
              variants={animations.scaleAndRotation}
            >
              <HiPlusCircle
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => {
                  setIsChooseSubModalOpen(true);
                }}
              />
            </AnimationWrapper>
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
                <ModalHeader setOpen={setIsChooseSubModalOpen} type="close">
                  Add a new Sub
                </ModalHeader>

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
              <div
                className={clsx("scrollbar-styles", "flex overflow-y-auto flex-col px-2 h-[40vh]")}
              >
                <AnimatePresence initial exitBeforeEnter>
                  {createPresetSubs().map(sub => {
                    return (
                      sub.title.toLowerCase().includes(values.searchString.toLowerCase()) && (
                        <AnimationWrapper
                          keyIndex={sub.title}
                          className="mb-2"
                          variants={animations.springInFromTop}
                          animateOnAllScreens
                        >
                          <PresetSubscriptionCard subValues={sub} />
                        </AnimationWrapper>
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
