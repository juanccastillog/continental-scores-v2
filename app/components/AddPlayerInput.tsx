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
            placeholder="Nombre"
            className="border border-gray-400 border-solid border-1 px-3 text-gray-800 w-40"
            onChange={event => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
        />
    )
};

export default AddPlayerInput;
