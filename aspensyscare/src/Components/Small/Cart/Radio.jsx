import { Field } from "formik";
import React from "react";

function Radio() {
  return (
    <div>
      <fieldset className="flex flex-wrap gap-3">
        <div>
          <Field 
            type="radio"
            name="address_type"
            value="Home"
            id="Home"
            className="peer hidden [&:checked_+_label_svg]:block"
            checked
          />

          <label
            for="Home"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-[#d9d9d9] px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            <svg
              className="hidden h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="text-sm font-medium">Home</p>
          </label>
        </div>
        <div>
          <Field 
            type="radio"
            name="address_type"
            value="Work"
            id="Work"
            className="peer hidden [&:checked_+_label_svg]:block"
          />

          <label
            for="Work"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-[#d9d9d9] px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            <svg
              className="hidden h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg> 
            <p className="text-sm font-medium">Work</p>
            
          </label>
        </div>
        
      </fieldset>
    </div>
  );
}

export default Radio;
