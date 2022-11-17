import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './routes/PublicRoutes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
