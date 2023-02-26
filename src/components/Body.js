import { useParams } from "react-router-dom"
import resources from "../recources/ressurser"

export default function Body({recources}){
    const {category} = useParams()
    const defaultCategory = resources.find(re => re.category === category) || resources[0]
    const name =resources.find((rec) => rec.category === category)
    if (!name) {
        return (
            <section>
            <h1>{defaultCategory .category}</h1>
            <p>{defaultCategory .text}</p>
            <ul>
                {defaultCategory .sources.map((step, index) => (
                    <li key={"step" + index}><a href={step.url}>{step.title}</a></li>
                ))}
            </ul>
        </section>
        )
        
    }

    return(
        <section>
            <h1>{name.category}</h1>
            <p>{name.text}</p>
            <ul>
                {name.sources.map((step, index) =>{
                 return   <li key={"step" + index}><a href={step.url}>{step.title}</a></li>
                })}
            </ul>
        </section>
    )
}
// }