import React, { useState } from "react";

interface useDropdownProps{
    label: string;
    defaultState: string;
    options: Array<string>;
}

const useDropdown = ({label, defaultState, options}: useDropdownProps) => {
    const [state, updateState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
    const Dropdown = () => (
        <label htmlFor={id}>
            { label }
            <select
                id={ id }
                value={ state }
                onChange={e => updateState(e.target.value)}
                onBlur={e => updateState(e.target.value)}
                disabled={!options.length}
            >
                <option />
                { options.map( item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
    return [state, Dropdown, updateState];
};

export default useDropdown;
