import { useState } from "react"

export const useStepper = (steps: number) => {
    const [allSteps, setAllSteps] = useState(steps)

    const [activeStep, setActiveStep] = useState(0)
    const [isLastStep, setIsLastStep] = useState(false)
    const [isFirstStep, setIsFirstStep] = useState(false)

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

    return {activeStep, setActiveStep, setIsLastStep, setIsFirstStep, handleNext, handlePrev, isFirstStep, isLastStep, allSteps}
}