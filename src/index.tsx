import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />,
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

