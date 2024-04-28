import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { UploadProductImg } from "../Uploaders/UploadProductImg"
import { useFormContext } from "react-hook-form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export const FirstStep = () => {
    const form = useFormContext()
 
      const keysArray  = [
        {key: 'C'},
        {key: 'C#'},
        {key: 'D'},
        {key: 'D#'},
        {key: 'E'},
        {key: 'F'},
        {key: 'F#'},
        {key: 'A'},
        {key: 'A#'},
        {key: 'B'}
        ]

    return <div> 
    <div className="flex gap-4" >  
        <UploadProductImg /> 
        <div className="flex flex-col gap-8" >  
        <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
        <FormItem>
        <FormLabel>Product title</FormLabel>
        <FormControl>
            <Input placeholder="title" {...field} />
        </FormControl>
        <FormMessage />
        </FormItem>)}/>

        <FormField
            control={form.control}
            name="bpm"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Bpm</FormLabel>
            <FormControl>
                <Input type="number" placeholder="bpm" {...field} />
            </FormControl>             
            <FormMessage />
            </FormItem>)}
            />

            
           <FormField
            control={form.control}
            name="key"
             render={({ field }) => (
            <FormItem>
            <FormLabel>Key</FormLabel>
            <FormControl>
                <Select onValueChange={(e) => field.onChange(e)} >
                    <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a key"  />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                        <SelectLabel>keys</SelectLabel>
                        {keysArray.map(({key}) =>   <SelectItem value={key}> {key}</SelectItem> )}
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="D#">D#</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </FormControl>             
            <FormMessage />
            </FormItem>
            )}/>
        </div> 
     </div>
 </div>
}
