interface AddPlayerInputProps {
    onChange: (newValue: string) => void;
}

const AddPlayerInput = ({onChange} : AddPlayerInputProps) => (
    <input className="border border-gray-400 border-solid border-1" onChange = {event => onChange(event.target.value)}/>
);

export default AddPlayerInput;
