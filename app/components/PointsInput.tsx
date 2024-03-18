import { ChangeEventHandler, useRef } from "react";

interface PointsInputProps {
    value: number,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const PointsInput = ({ value, onChange }: PointsInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocusPointsInput = () => {
        inputRef.current?.select();
    }
    return (
        <input
            ref={inputRef}
            value={value}
            onFocus={handleFocusPointsInput}
            type="number"
            step="5"
            id="name"
            name="name"
            className="w-16 h-7 border border-gray-300 rounded-md px-1 py-2 focus:outline-none focus:border-indigo-500"
            onChange={onChange}
        />
    )
}

export default PointsInput;

