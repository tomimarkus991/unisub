import {
  FormikInput,
  RealButton,
  ModalHeader,
  Modal,
  ModalFooterContainer,
  AnimationWrapper,
  Button,
  animations,
} from "@redlotus/ui";
import clsx from "clsx";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { HiPlusCircle } from "react-icons/hi";

import { createPresetSubs, SearchSubYupSchema } from "app-constants";
import { PresetSubscriptionCard, SubscriptionModal } from "components";
import { useSubModal } from "context";

interface FormValues {
  searchString: string;
}
interface Props {
  buttonType?: "icon" | "real" | "regular";
  buttonTitle?: string;
}

export const ChooseSubModal = ({
  buttonType = "icon",
  buttonTitle = "Add subscription",
}: Props) => {
  const { isChooseSubModalOpen, setIsChooseSubModalOpen } = useSubModal();

  const initialValues: FormValues = {
    searchString: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SearchSubYupSchema}
      // validateOnMount
      validateOnChange={false}
      onSubmit={(_, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        resetForm();

        setSubmitting(false);
      }}
    >
      {({ values }) => {
        return (
          <Modal
            open={isChooseSubModalOpen}
            setOpen={setIsChooseSubModalOpen}
            maxWidth="md"
            modalButton={
              <>
                {buttonType === "icon" && (
                  <AnimationWrapper
                    animateOnMobile={false}
                    key="choose-modal-plus-icon"
                    variants={animations.scaleAndRotation}
                  >
                    <HiPlusCircle
                      className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                      onClick={() => setIsChooseSubModalOpen(true)}
                    />
                  </AnimationWrapper>
                )}
                {buttonType === "real" && (
                  <RealButton onClick={() => setIsChooseSubModalOpen(true)}>
                    {buttonTitle}
                  </RealButton>
                )}
                {buttonType === "regular" && (
                  <Button size="md" variant="dark" onClick={() => setIsChooseSubModalOpen(true)}>
                    {buttonTitle}
                  </Button>
                )}
              </>
            }
          >
            <Form className="flex flex-col">
              <div className="flex sticky z-[1202] flex-col items-center px-4 pb-3 min-h-[9rem]">
                <ModalHeader setOpen={setIsChooseSubModalOpen} type="close">
                  Add a new Sub
                </ModalHeader>

                <FormikInput
                  name="searchString"
                  type="text"
                  placeholder="Search"
                  className={clsx("px-3 my-2")}
                />
                <h3 className="text-lg font-medium leading-6 text-gray-400">
                  Popular subscriptions
                </h3>
              </div>
              <div
                className={clsx(
                  "scrollbar-hide",
                  "flex overflow-y-auto flex-col px-2 h-[40vh] min-h-[15rem] items-center"
                )}
              >
                <AnimatePresence initial={false} exitBeforeEnter>
                  {createPresetSubs().map(sub => {
                    return (
                      sub.title.toLowerCase().includes(values.searchString.toLowerCase()) && (
                        <AnimationWrapper
                          key={`sub${sub.title}`}
                          className="mb-2 sm:w-[25rem]"
                          variants={animations.springInFromTop}
                        >
                          <PresetSubscriptionCard sub={sub} />
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
          </Modal>
        );
      }}
    </Formik>
  );
};
