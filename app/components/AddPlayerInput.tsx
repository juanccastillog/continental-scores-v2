import { KeyboardEventHandler } from "react";

interface AddPlayerInputProps {
    name: string,
    onChange: (newValue: string) => void,
    onKeyDownEnter: () => void,
}



const AddPlayerInput = ({ onChange, onKeyDownEnter, name }: AddPlayerInputProps) => {

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter'){
            onKeyDownEnter();
        }
    }

    return (
        <input
            value={name}
            className="border border-gray-400 border-solid border-1 p-3"
            onChange={event => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
        />
    )
};

export default AddPlayerInput;
