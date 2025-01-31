import '@fontsource/source-code-pro';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { RouterProvider } from './systems/Core';
import './exports';

createRoot(document.getElementById('root')!).render(
  <RouterProvider>
    <App />
  </RouterProvider>
);
