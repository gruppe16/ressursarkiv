import Header from "./Header";
import TabMenu from "./TabMenu";
import resource from "../recources/ressurser"
import { Link } from "react-router-dom";
import Random from "./Random";

export default function Main (){
    return(
        <div>
            {resource.map((resource) => (
             <Link key={resource.category} to={`/category/${resource.category}`}>
                <Header />
              <TabMenu>
                <Random title={resource.category} />
              </TabMenu>
            </Link>
             ))}
        </div>
    )
}