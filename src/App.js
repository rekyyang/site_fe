import './App.css';
import SiteLayout from "./siteLayout/SiteLayout";
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <SiteLayout/>
        </BrowserRouter>
    );
}

export default App;
