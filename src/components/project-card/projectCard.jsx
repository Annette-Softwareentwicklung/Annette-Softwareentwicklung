import styles from "./projectCard.module.css"


/**
 * @param {position} "top" / "bottom" 
 * @param {height} 0 - 1 (Kommazahl) 
 */

export const ProjectCard = ({
  onClick,
  position,
  pHeight, 
  imageUrl, 
  title, 
  description, 
  selected, 
  width, 
  widthIncrease
}) => {

  return <div className={styles.wrapper} style={{
    width: selected ? width + widthIncrease : width,
  }}>
    <div 
      className={styles.projectCard} 
      style={{
        height: `${pHeight * 100}%`,
        [position]: 0
      }}
      onClick={() => onClick()}
    >
      <div className={styles.mask}></div>
      <img src={imageUrl} alt={`Foto von ${imageUrl}`} />
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  </div> 

}