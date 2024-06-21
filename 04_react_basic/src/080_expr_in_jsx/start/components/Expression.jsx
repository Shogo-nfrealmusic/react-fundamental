import "./Expression.css";
const Expression = () => {
    const title = "Expression";
    const ary = ['item1', 'item2', 'item3'];
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>;
    return(
        <div className="expression">
            <h3>Hello {title}</h3>
            <h3>{ary}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{/* { {画面上に表示されない} } */}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
        </div>
    )
}

export default Expression;