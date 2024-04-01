import { CountriesStep } from '../ui/CountriesStep'
import { RoleStep } from '../ui/RoleStep'
import { TagsStep } from '../ui/TagsStep'

export const steps: Record<number, () => JSX.Element> = {
    0: RoleStep,
    1: TagsStep,
    2: CountriesStep
}
