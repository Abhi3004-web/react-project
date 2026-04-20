import { useState } from "react";

const useToggle = (defaultValue) => {
    const [data, setData] = useState(defaultValue);
    function ToggleData(val) {
        if (typeof val !== "boolean") {
            setData(!data);
        } else {
            setData(!val);
        }
    }
    return [data, ToggleData];

}
export default useToggle;