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
        }
    }
    return (
        <div className="flex flex-row">
            <AddPlayerInput onChange={handleNameChange} />
            <div className="w-5" />
            <AddPlayerButton onClick={handleAddPlayerName} />
        </div>
    )
}

export default AddPlayer;