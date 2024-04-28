import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useFormContext } from "react-hook-form"

export const TemplateSelector = () => {
    // const templates = useTemplates
    const templates = false
    const form = useFormContext()

    return  <FormField
    control={form.control}
    name="template"
     render={({ field }) => (
    <FormItem>
    <FormLabel>Speed it up! Create a Ready-to-use Template for your beats</FormLabel>
    <FormControl>
        <Select onValueChange={(e) => field.onChange(e)} >
        <SelectTrigger className="w-[180px]">
             <SelectValue placeholder="select a template " />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
            <SelectLabel>Template</SelectLabel>
            {templates ?  <>
            <SelectItem value="apple">C</SelectItem>
            <SelectItem value="banana">B</SelectItem>
            </>  : <Button> create template </Button> }
        
        </SelectGroup>
        </SelectContent>
        </Select>
    </FormControl>             
    <FormMessage />
    </FormItem>
    )} />
}