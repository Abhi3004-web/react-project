# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
===============================================================

Virtualization implementation:
===============================
1) npm create vite@latest (create react application with vite)

2) install virtualization library : npm install react-window@1.8.9 -- force
   because there is some issue in latest version of react-window

3) write the code:

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

4) There are TWO important optimizations here:

Row is outside component
memo() is used

5) If we add Row inside Child component

Now every time Child re-renders:

Row function recreates again
New function reference created
React treats it as a new component

This causes:

unnecessary renders
poor virtualization performance
more memory usage