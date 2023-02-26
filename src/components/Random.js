export default function Random({title, text}){
    return(
        <article className="recipe-card">
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    )
}