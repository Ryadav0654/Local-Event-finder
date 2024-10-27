import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/homePage/index.tsx";
import SignInPage from "./pages/auth/Login.tsx";
import SignUpPage from "./pages/auth/Register.tsx";
import ContactPage from "./pages/ContactPage.tsx";


const router = createBrowserRouter([
  {
    element:<Layout/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
    ]
  },
  
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
