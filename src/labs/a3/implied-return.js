const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);
const ImpliedReturn = () => {
    return (
        <div>
            <h2>Implied Return</h2>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4,5) = {multiply}<br />
        </div>
       );
}
export default ImpliedReturn;