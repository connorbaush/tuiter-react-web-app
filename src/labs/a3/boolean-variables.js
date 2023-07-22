
let numberVariable = 123;
let floatingPointNumber = 234.345;
let true1 = true
let false1 = false
let false2 = true1 && false1
let true2 = true1 || false1
let true3 = !false2
let true4 = numberVariable === 123
let true5 = floatingPointNumber !== 321.432
let false3 = numberVariable < 100
let sortaTrue = '1' == 1  // never use this ==
let notTrue = '1' === 1 // always use this ===

//let bigString = true1.toString() + false1.toString() + false2.toString() + true2.toString() + true3.toString() + true4.toString() + true5.toString() + false3.toString() + sortaTrue.toString() + notTrue.toString();

function BooleanVariables() {
    
    return (
        <div>
            true1 = {true1 + ""} <br />
            false1 = {false1 + ""} <br />
            false2 = {false2 + ""} <br />
            true2 = {true2 + ""} <br />
            true3 = {true3 + ""} <br />
            true4 = {true4 + ""} <br />
            true5 = {true5 + ""} <br />
            false3 = {false3 + ""} <br />
            sortaTrue = {sortaTrue + ""} <br />
            notTrue = {notTrue + ""} <br />
        </div>
    );
    console.log(typeof (true1));
}
export default BooleanVariables;

