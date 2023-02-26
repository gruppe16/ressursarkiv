import TabMenu from "./TabMenu";
import Header from './Header';
//import Main from "./Main";
import { Link, Outlet } from "react-router-dom";
//import Body from "./Body";


export default function Layout() {
    return(
        // <div >
        //     <Header> 
        //         <Link to="/"></Link>
        //     </Header>

        //    <TabMenu/>
        // </div>
        <div id="container">
        
          { /*<Link to="/"> */ } 
             <Header/>
           { /*</Link> */}
       
            <TabMenu/>
        <main className="resource-info">
           <Outlet/>
        </main>
        <footer>
  
        </footer>
      </div>
    )
}