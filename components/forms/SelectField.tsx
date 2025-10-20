import React from 'react'
import {Label} from "@/components/ui/label";
import {Controller} from "react-hook-form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const SelectField = ({name,label,placeholder,options,control,error,required=false}:SelectFieldProps) => {
    return (
        <div className="space-y-2">
        <Label htmlFor={name} className="form-label">
            {label}
        </Label>


           <Controller
               name={name}
               control={control}
               rules={{
                           required: required ? `Please select ${label.toLowerCase()}`:false,
                       }}

               render={({field }) => (

                              <Select value={field.value} onValueChange={field.onChange}>
                                  <SelectTrigger className="select-trigger">
                                   <SelectValue placeholder={placeholder}/>
                                </SelectTrigger>
                                  <SelectContent
                                      className="bg-[#1e1e1e] border border-[#2a2a2a] text-gray-100 rounded-md shadow-lg"
                                  >
                                      {options.map((option) => (
                                          <SelectItem
                                              value={option.value}
                                              key={option.value}
                                              className="hover:bg-[#2b2b2b] focus:bg-[#2b2b2b] focus:text-white cursor-pointer transition-colors"
                                          >
                                              {option.label}
                                          </SelectItem>
                                      ))}
                                  </SelectContent>

                                  {error && <p className="text-sm  text-red-500">{error.message}</p> }

                            </Select>
           )}
/>

        </div>
    )
}
export default SelectField
