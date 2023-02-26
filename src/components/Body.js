import { useParams } from "react-router-dom"
import resources from "../recources/ressurser"

export default function Body({recources}){
    const {category} = useParams()
    const name =resources.find((rec) => rec.category === category)
    // return(
    //     <section>
    //         <h1>{name.category}</h1>
    //         <p>{name.text}</p>
    //         <ul>
    //             {name.sources.map((step, index) =>{
    //              return   <li key={"step" + index}><a href={step.url}>{step.title}</a></li>
    //             })}
    //         </ul>
    //     </section>
    // )
    if (!name) {
        return 
        
            // <section>
            //     <h1>press a button to see the contents</h1>
            // </section>
        
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