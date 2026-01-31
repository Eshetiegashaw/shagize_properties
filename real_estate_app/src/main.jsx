import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FrappeProvider } from 'frappe-react-sdk'
// import { FontProvider } from './context/font-provider'
import { ThemeProvider } from './components/providers/theme-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* <FontProvider> */}
      <FrappeProvider
        siteName={import.meta.env.VITE_SITE_NAME}
        socketPort={import.meta.env.VITE_SOCKET_PORT}
        withCredentials={true}
        enableSocket={false}
      >
        <App />
      </FrappeProvider>
      {/* </FontProvider> */}
    </ThemeProvider>
  </StrictMode>
)
// < StrictMode >
// <QueryClientProvider client={queryClient}>
//   <ThemeProvider>
//     <FontProvider>
//       <DirectionProvider>
//         <RouterProvider router={router} />
//       </DirectionProvider>
//     </FontProvider>
//   </ThemeProvider>
// </QueryClientProvider>
//   </ >