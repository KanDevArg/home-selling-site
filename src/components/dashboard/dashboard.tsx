import {FC} from "react";
import UniversalSearch from "../universal-search/universal-search";

const Dashboard: FC<{}> = (): JSX.Element => {
    return (
        <div>
            <UniversalSearch/>
            <div>Here goes the list ...</div>
        </div>
    );
};
export default Dashboard;