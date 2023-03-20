import styles from "./projectCard.module.css"


/**
 * @param {position} "top" / "bottom" 
 * @param {height} 0 - 1 (Kommazahl) 
 */

export const ProjectCard = ({position, pHeight, imageUrl, link, title, description, selected, width, widthIncrease}) => {

  return <div className={styles.wrapper} style={{
    width: selected ? width + widthIncrease : width,
  }}>
    <div 
      className={styles.projectCard} 
      style={{
        backgroundImage: imageUrl,
        height: `${pHeight * 100}%`,
        [position]: 0
      }}
      onClick={() => {
        if (link != undefined) window.location.href = link
      }}
    >
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  </div> 

}