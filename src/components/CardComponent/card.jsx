

export function Card({name, title, imgUrl}) {
    return <section>
        <div className={"card-container"}>
            <CardTitle name={name} title={title}/>
            <CardImage picture={imgUrl}/>
        </div>
    </section>
}

function CardImage({picture}){
    return <div>
        <img src={picture} alt={''} />
    </div>
}

function CardTitle({name,title}){
    return <div>
        <h2>{name}</h2>
        <h2>{title}</h2>
    </div>
}