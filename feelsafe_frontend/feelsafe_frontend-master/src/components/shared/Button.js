import React from "react";

function Button({text, onClick, backgroundColor, textColor}) {
    return (
        <div className="mainInput w-full h-full rounded-xl">
            <button
                onClick={onClick}
                className="rounded-lg w-full py-2"
                style={{backgroundColor: backgroundColor, color: textColor}}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;