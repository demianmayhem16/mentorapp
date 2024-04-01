'use client'
import { OnboardingStepProxy } from '@/Features/OnboardingStep'
import { Stepper, Step, Button } from '@material-tailwind/react'
import { useState } from 'react'

export default function Onboarding() {
    const [activeStep, setActiveStep] = useState(0)
    const [isLastStep, setIsLastStep] = useState(false)
    const [isFirstStep, setIsFirstStep] = useState(false)

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)
    return (
        <div className="bg-gray-900 h-screen">
            <div className="w-1/2 py-4 px-8">
                <Stepper
                    placeholder
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step placeholder onClick={() => setActiveStep(0)}>
                        1
                    </Step>
                    <Step placeholder onClick={() => setActiveStep(1)}>
                        2
                    </Step>
                    <Step placeholder onClick={() => setActiveStep(2)}>
                        3
                    </Step>
                </Stepper>

                <OnboardingStepProxy stepNumber={activeStep} />

                <div className="mt-16 flex justify-between">
                    <Button placeholder onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button placeholder onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
