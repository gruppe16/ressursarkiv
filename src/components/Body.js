import { useParams } from "react-router-dom"
import resources from "../recources/ressurser"

export default function Body({recources}){
    const {category} = useParams()
    const name =resources.find((rec) => rec.category === category)

    if (!name) {
        return (
            <section>
            <h3>press a category to see its contents</h3>
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
