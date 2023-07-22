import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="container">
                <HelloWorld />
                <Labs />
                <Tuiter />
            </div>
        </HashRouter>
    );
}
export default App;