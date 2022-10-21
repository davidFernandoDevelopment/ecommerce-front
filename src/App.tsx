import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './routes';

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        theme='dark'
        autoClose={1000}
        pauseOnFocusLoss
        newestOnTop={false}
        hideProgressBar={false}
        position="bottom-center"
      />
    </>
  );
}

export default App;
