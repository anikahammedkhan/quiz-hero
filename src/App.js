import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from '../src/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
