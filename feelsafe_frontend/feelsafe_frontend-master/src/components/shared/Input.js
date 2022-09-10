import React from "react";

function Input({type,placeholder,value,onChange}) {
    return (
        <div className="mainInput w-full h-full rounded-xl">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full h-full rounded-xl border-2 border-solid border-gray-400 p-4"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;