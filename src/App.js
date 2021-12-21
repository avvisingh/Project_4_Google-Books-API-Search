import "./App.css";
import Header from "./Component/Header";
import MainPage from "./Container/MainPage";
import { fetchAPI } from "./assets/utils/api-fetch";
import { apiInterface } from "./assets/utils/api-interface";

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
