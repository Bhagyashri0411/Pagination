import { useState } from "react";
import Select from "react-select";

export default function Selectoption() {
    const [selectedOptions, setSelectedOptions] = useState();

    const optionData = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
    ]

    function  handleSelect(data) {
        setSelectedOptions(data);
    }

    return (
        <>
            <div className="dropdown-container">
                <Select options={optionData} placeholder="select color" value={selectedOptions} onChange={handleSelect} isSearchable={true}
                    isMulti>

                </Select>
            </div>
        </>
    )
}