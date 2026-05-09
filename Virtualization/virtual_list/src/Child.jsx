import { FixedSizeList as List } from "react-window";
import { memo } from 'react'
const Row = memo(({ index, style, data }) => {
    return (
        <div style={style}>
            {data[index].name}
        </div>
    );
});
function Child() {
    const employees = Array.from(
        { length: 1000 },
        (_, i) => ({
            name: `Abhijit${i}`,
            age: 30
        })
    );
    return (
        <>
            <List
                height={300}
                width={300}
                itemSize={35}
                itemCount={employees.length}
                itemData={employees}

            >
                {Row}
            </List>
        </>
    )
}
export default Child;