import TabMenu from "./TabMenu";
import Header from './Header';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div id="container">
             <Header/>
            <TabMenu/>
        <main className="resource-info">
           <Outlet/>
        </main>
      </div>
    )
}