import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { InstructorContextProvider } from './context/InstructorContext.jsx'
import { CourseContextProvider } from './context/CourseContext.jsx'

export const server = 'http://localhost:8080'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstructorContextProvider><CourseContextProvider><App /></CourseContextProvider></InstructorContextProvider>

  </StrictMode>,
)
