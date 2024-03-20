import { useState } from "react";

import AddPlayerInput from "./AddPlayerInput";
import AddPlayerButton from "./AddPlayerButton";

interface AddPlayerProps {
    onAddPlayerName: (name: string) => void;
}


const AddPlayer = ({ onAddPlayerName }: AddPlayerProps) => {
    const [name, setName] = useState('');

    const handleNameChange = (newValue: string) => {
        setName(newValue)
    };

    const handleAddPlayerName = () => {
        if (name) {
            onAddPlayerName(name);
            setName('');
        }
    }
    return (
        <div className="flex flex-row w-64">
            <AddPlayerInput name={name} onChange={handleNameChange} onKeyDownEnter={handleAddPlayerName}/>
            <div className="w-5" />
            <AddPlayerButton onClick={handleAddPlayerName} />
        </div>
    )
}

export default AddPlayer;