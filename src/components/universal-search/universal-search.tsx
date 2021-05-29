import React, { FC, useState, useCallback } from "react";
const UniversalSearch: FC<{}> = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const updateCount = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>): void => {
            switch (e.currentTarget.innerText) {
                case "-":
                    setCount(count - 1);
                    break;
                case "+":
                default:
                    setCount(count + 1);
                    break;
            }
        },
        [count]
    );
    return (
        <div className="u-search-container">
            <h2>Universal Search</h2>
            <h1>{count}</h1>
            <button onClick={updateCount}>+</button>
            <button onClick={updateCount}>-</button>
        </div>
    );
};
export default UniversalSearch;