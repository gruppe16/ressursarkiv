import Header from "./Header";
import TabMenu from "./TabMenu";
import { Link } from "react-router-dom";
import Random from "./Random";
import { useParams } from "react-router-dom";

export default function Main ({resources}){
    const {category} = useParams()
    const name =resources.find((rec) => rec.category === category)
    return(
        <div>
            <Header />
            {/* <TabMenu>
            {resources.map((resource) => (
  <Link
    key={resource.category}
    to={`/category/${resource.category}`}
    className={`tabslink ${
      category === resource.category ? "active" : ""
    }`}
  >
    <Random title={resource.category} text={resource.text} />
  </Link>
))}
  </TabMenu> */}
             <TabMenu>
  {resources.map((resource) => (
    <Link
    key={resource.category}
    to={`/category/${resource.category}`}
    className={`tabslink ${
      category === resource.category ? "active" : ""
    }`}
  >
    <Random title={resource.category} text={resource.text} />
  </Link>
  ))}
</TabMenu>
             <main>
            <h1>{name.category}</h1>
            <p>{name.text}</p>
            <ul>
                {name.sources.map((step, index) =>{
                 return   <li key={"step" + index}><a href={step.url}>{step.title}</a></li>
                })}
            </ul>
        </main>
        </div>
    )
}