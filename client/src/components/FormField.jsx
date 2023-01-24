import React from "react";

const FormField = (props) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block text-sm font-medium text-gray-900"  htmlFor={props.name}>
          {props.labelName}
        </label>
        {
            props.isSurpriseMe && (
                <div 
                className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
                onClick={props.handleSurpriseMe}
                >
                    Surprise Me
                </div>
            )
        }
      </div>
      <div>
        <input 
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value}
        required
        name={props.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
        />
      </div>
    </div>
  );
};

export default FormField;
