import React, { useState, useEffect } from "react";

const Stepper = ({ list, currentLabel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const stepsCount = list.length;

  const steps = [];
  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <>
        <div
          onClick={() => !isFinished && setCurrentStep(i)}
          className={`steps ${currentStep >= i ? "active" : ""} ${
            currentStep > i ? "completed" : ""
          } ${isFinished && currentStep === i ? "completed" : ""}`}
          key={i}
        >
          {currentStep > i || (isFinished && currentStep === i) ? "✓" : i + 1}
        </div>
      </>
    );
  }

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    const progressLine = document.querySelector(".progress-line");
    const stepsWrapper = document.querySelector(".steps-wrapper");
    const stepHeight = stepsWrapper.offsetHeight / stepsCount;
    progressLine.style.height = `${stepHeight * currentStep}px`;
  }, [currentStep, stepsCount]);

  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="progress-container">
          <div className="progress-line"></div>
          <div className="steps-wrapper">{steps}</div>
          <p>{currentLabel}</p>
        </div>
      </div>
      <div className="step-content">
        {isFinished ? (
          <div className="congrats-message">
            <h1>Congrats! You've completed all steps.</h1>
          </div>
        ) : (
          React.cloneElement(list[currentStep], { onPrev, onNext })
        )}
      </div>
    </section>
  );
};

export default Stepper;
