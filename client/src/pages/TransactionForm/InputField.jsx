import React from 'react';

const InputField = ({ label, type, value, onChange, required = false }) => (
    <div>
        <label>
            {label}:
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
            />
        </label>
    </div>
);

export default InputField;
