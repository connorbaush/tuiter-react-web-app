import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";

function App() {
    return (
        <div className="container">
            <HelloWorld />
            <Labs />
            <Tuiter />
            Making a change
        </div>
    );
}
export default App;