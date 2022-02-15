import {
  MultiStepForm,
  MultiStepFormData,
} from "../multi-step-form/MultiStepForm";
import { useState } from "react";

interface StepProps {
  onNext?: (stepData: MultiStepFormData) => void;
}
const Step1 = ({ onNext = () => undefined }: StepProps) => (
  <>
    <span>Step1</span>
    <button onClick={() => onNext({ step1: "Step1" })}>Next</button>
  </>
);
const Step2 = ({ onNext = () => undefined }: StepProps) => (
  <>
    <span>Step2</span>
    <button onClick={() => onNext({ step2: "Step2" })}>Next</button>
  </>
);
const Step3 = ({ onNext = () => undefined }: StepProps) => (
  <>
    <span>Step3</span>
    <button onClick={() => onNext({ step3: "Step3" })}>Next</button>
  </>
);

export const MultiStepFormPage = () => {
  const [formData, setFormData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData: MultiStepFormData) => {
    setFormData({ ...formData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <MultiStepForm
      currentIndex={currentIndex}
      onNext={onNext}
      onFinish={() => console.log(formData)}
    >
      <Step1 />
      <Step2 />
      <Step3 />
      {/*TODO: skip steps -> do not render certain steps based on form data state*/}
    </MultiStepForm>
  );
};
