import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter} from 'react-router-dom'

import MainRoute from './views/routes/MainRoute'

const App = () => {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
