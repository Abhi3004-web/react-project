## I am explaining here 
## 1. how to create Microfrontend folder structure
## 2. How to run Host and Remote App
## 3. How to vite federation will work .
## 4. How to Remote App data consume in Host App. 
====================================================

## 1. Create Folder : mkdir Microfrontend_Projects
## 2. open this folder in vs code or come inside this folder : cd Microfrontend_Projects
## 3. install : npm install -g pnpm
Why use pnpm (for your microfrontend setup)

Given you're working with Module Federation + multiple apps, pnpm is ideal:

⚡ Faster installs (content-addressable store)
📦 Better disk usage
🔒 Strict dependency resolution (avoids hidden bugs)
🧩 Works great with monorepos (Turborepo / Nx)

## 4. create 2 folder Host and . separetly run the bellow command inside Host/Remote folder
## 5. pnpm create vite@latest . --template react
This command bootstraps a React app using Vite in the current directory via pnpm. Let’s break it down precisely:
* What Happens Internally
pnpm downloads create-vite
Scaffolds files using React template
Sets up minimal config:
ES modules
Fast dev server
HMR (Hot Module Replacement)
## 6. pnpm install - run this commnad 
## 7. inside Host/Remote folder - pnpm install @originjs/vite-plugin-federation
This command adds the Module Federation plugin for Vite to your project using pnpm.
Breakdown

1. pnpm install
Installs a dependency into your project
Updates:
package.json
pnpm-lock.yaml
node_modules (via pnpm’s symlinked store)

2. @originjs/vite-plugin-federation
A Vite plugin that enables Module Federation
Equivalent concept to Webpack Module Federation, but adapted for Vite
🚀 What This Plugin Does

It allows you to build microfrontends where:

✔️ Expose modules (Remote)
exposes: {
  './Button': './src/components/Button.jsx'
}
✔️ Consume modules (Host)
remotes: {
  remoteApp: 'http://localhost:5001/assets/remoteEntry.js'
}
## 8. Modify vite.config.js file from both folder (Host/Remote)
## 9. Look into both files where those component we want to call in host APP , we exposes those component from Remote App
## 10. We want to change the port number for both Host and Remote App, we need to open package.json file.
Remote App package.json file - modify and update the below line
================================================================
"dev": "vite --port 5001 --strictPort",
"build": "concurrently \"vite build --watch\" \"vite preview --port 5001 --strictPort\"",
===================================================
run the commnad : pnpm install concurrently --save-dev (to update this in dev dependency)
================================================================
Host App package.json file - modify and update the below line
================================================================
"dev": "vite --port 5000 --strictPort",
"build": "vite build",

## 11. to run Host App : pnpm run dev
## 12. to run Remote App : 
 1. pnpm run build
 2. ctrl+c 
 3. pnpm preview -- port 5001

 ## 13 those consumed component is visible on Host APP
 ===============================================================================

 ## ** How to share the state from Remote App to Host App ** ##
 =================================================================
 1. we share the state by using context API / Redux. But here i am using context API
 2. create context in Remote App
 3. create provider with children props. inside the context.provider put state value and method which update the state value .
 like :  <MyContext.Provider value={{ count, increment }}>
            {children}
        </MyContext.Provider>
4. update vite.config.js file to update the expose section and update this provider
5. update main..jsx file
  like : 

import { MyProvider } from 'remoteApp/MyProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>,
)

6. create custom hooks to share the global state

export const useSharedState = () => {
    const context = useContext(MyContext);
    if (!context) throw new Error('useSharedState must use within provider');
    return context;
}
7. consume useSharedState hooks in App.jsx(Host App) file. Fetch remote App state value or update this value both. It will reflect in remote app as well.
============================================================
import { Suspense } from 'react'
import { useSharedState } from 'remoteApp/MyProvider'
const Button = React.lazy(() => import('remoteApp/Button'))
============================================================
inside the render method :
============================================================
<section id="center">
        <button onClick={increment}>count : {count}</button>
</section>
<Suspense fallback={<h1>Loading....</h1>}>
        <Button />
</Suspense>
===================================================================
Remote App : update button as well where state is visible on button 
===================================================================
import { useSharedState } from '../context/MyContext'
import './Button.css';
function Button() {
    const { count, increment } = useSharedState()
    return (
        <>
            <button id="click-btn" className="shared-btn" onClick={increment}>Hello World Abhijit Ranjan: {count}</button>
        </>
    )
}
export default Button;



