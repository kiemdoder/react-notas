import React, { useEffect } from "react";

export interface MultiStepFormData {
  [valueName: string]: any;
}

interface MultiStepFormProps {
  children: React.ReactNode;
  onNext: (stepData: MultiStepFormData) => void;
  onFinish: () => void;
  currentIndex: number;
}

export const MultiStepForm = ({
  children,
  onNext,
  onFinish,
  currentIndex,
}: MultiStepFormProps) => {
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (currentIndex >= childrenArray.length) {
      onFinish();
    }
  }, [childrenArray.length, currentIndex, onFinish]);

  if (currentIndex >= childrenArray.length) {
    return <div>Done</div>;
  }

  const currentStep = childrenArray[currentIndex];

  if (React.isValidElement(currentStep)) {
    return React.cloneElement(currentStep, { onNext });
  }

  return <span></span>; //invalid current element
};
