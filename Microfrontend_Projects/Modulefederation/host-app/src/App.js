import React, { Suspense } from 'react';

const RemoteApp = React.lazy(() => import('app2/App'));

export default function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback="Loading...">
        <RemoteApp />
      </Suspense>
    </div>
  );
}