import { steps } from '../model/steps'

const OnboardingStepProxy = ({ stepNumber }: { stepNumber: number }) => {
    const Step = steps[stepNumber]

    return (
        <div>
            <Step />
        </div>
    )
}

export { OnboardingStepProxy }
