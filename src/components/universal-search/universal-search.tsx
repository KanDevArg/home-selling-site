import React, { FC, useState, useCallback } from "react";
const UniversalSearch: FC<{}> = (): JSX.Element => {
    const [searchStatus, setSearchStatus] = useState("About to search");
    const goSearch = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === "Enter") {
                setSearchStatus("searching");
                return;
            }
            setSearchStatus("About to search")
        },
        [searchStatus]
    );
    return (
        <div className="u-search">
            <div className="input-box">
                <label>Universal Search</label>
                <input className="input-box-input"
                       placeholder="Universal search"
                       type="text"
                       onKeyPress={goSearch}
                />
                <h1>{searchStatus}</h1>
            </div>
        </div>
    );
};
export default UniversalSearch;