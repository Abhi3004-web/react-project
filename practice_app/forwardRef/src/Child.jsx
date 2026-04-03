import { forwardRef } from "react";
// before React 19 , Forward ref is using like this.
//=========================================================
// const Child = (props, ref) => {
//     return (
//         <>
//             <input ref={ref} placeholder='enter name' onChange={(e) => e.target.value} />
//         </>
//     );
// };
//export default forwardRef(Child);
//=========================================================
//  React 19 and above , Forward ref is not using.
//=========================================================
const Child = (props) => {
    return (
        <>
            <input ref={props.ref} placeholder='enter name' onChange={(e) => e.target.value} />
        </>
    );
};
//=========================================================
export default Child;