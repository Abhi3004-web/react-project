import React from "react";
type TextInputValue = {
    label?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    backgroundColor?: string,
    padding?: string
}
const ItextInput = (prop: TextInputValue) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {prop.label && (
                <label
                    style={{
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    {prop.label}
                </label>
            )}
            <input
                type="text"
                placeholder={prop.placeholder}
                value={prop.value}
                onChange={prop.onChange}
                style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                }}
            />
        </div>
    );
};
export default ItextInput;