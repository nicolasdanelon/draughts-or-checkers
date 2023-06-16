import { render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app.jsx'
import { AxiosProvider } from './components/request-context.jsx';
import './index.css'

render(
  <BrowserRouter>
    <AxiosProvider>
      <App />
    </AxiosProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
