import styles from "./card.module.css"

export function Card({name, title, imgUrl}) {
    return <section>
        <div className={styles.card}>
            <CardTitle name={name} title={title}/>
            <CardImage picture={imgUrl}/>
        </div>
    </section>
}

function CardImage({picture}){
    return <img className={styles.image} src={picture} alt={''} />;
}

function CardTitle({name,title}){
    return <div className={styles.title}>
        <b>{name}</b>
        <p>{title}</p>
    </div>
}