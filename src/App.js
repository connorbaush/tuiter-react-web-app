import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
    return (
        <HashRouter>
                <Routes>
                   
                    <Route path="/labs/*" element={<Labs />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/tuiter/*" element={<Tuiter />} />
                </Routes>
        </HashRouter>
    );
}
export default App;