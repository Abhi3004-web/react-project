import React, { useRef, useEffect } from 'react';

const PreviousVal = ({ val }) => {
    // const [inputValue, setInputValue] = useState('');
    const previousValueRef = useRef();

    // Update previousValueRef with the current value before it changes
    useEffect(() => {
        previousValueRef.current = val;
    }, [val]);

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // };
    return (
        <div>
            <h1>Track Previous Value with useRef</h1>
            {/* <input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something"
            /> */}
            <p>Current Value: {val}</p>
            <p>Previous Value: {previousValueRef.current}</p>
        </div>
    )
}

export default PreviousVal


