'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useGetTemporaryProduct } from "@/Shared/api/queryHooks/tempProducts"
import { useEffect } from "react"
import { useStepper } from "../model/useStepper"
import { Stepper } from '@material-tailwind/react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getPercentage } from "@/Shared/helpers/getPercentage"
import { FirstStep } from "../ui/Steps/FirstStep"
import { SecondStep } from "../ui/Steps/SecondStep"
import { TemplateSelector } from "../ui/TemplateSelector"

type TDefaultValues = Awaited<ReturnType<typeof useGetTemporaryProduct>>
type MappedTypeWithUndefinedValues<Def> = {
  [K in keyof Def]: Exclude<Def[K], null> | undefined;
};


type Y = MappedTypeWithUndefinedValues<TDefaultValues>

export const ProductFormWidget = () => {
const { data, isSuccess } = useGetTemporaryProduct();
const {activeStep, 
  handleNext, 
  handlePrev, 
  setIsFirstStep, 
  setIsLastStep, 
  isFirstStep, 
  isLastStep, 
  allSteps} = useStepper(3)


const form = useForm();

useEffect(() => {
  if (data && isSuccess) {
      form.reset(data);
  }
}, [data]);


const onSubmit = (f: any) => {
  // delete temporary template
  // create product
  console.log(f,' form')
}

    return <Dialog>
    <DialogTrigger> Add Product </DialogTrigger>
    <DialogContent>
    <Form {...form} >
      <DialogHeader>
                 <DialogTitle className="mb-6" >Create Product</DialogTitle>
                 <Stepper
                    placeholder
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                  <Progress className='mt-[10px]' value={getPercentage(activeStep, allSteps)} />
                </Stepper>
               {activeStep === 0 &&  <TemplateSelector/>}
      </DialogHeader>       
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
            {activeStep === 0 && <FirstStep/>} 
            {activeStep === 1 && <SecondStep/>}    
          </form>
      
           <div className="mt-4 flex justify-between">
                    <Button  onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button  onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
                </Form>
    </DialogContent>
  </Dialog>
}