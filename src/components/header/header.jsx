import styles from "./header.module.css"

export function Header() {
  return <header className={styles.header}>
        <table>
		<tr>
			<td><p>Annette Softwareentwicklung</p></td>
			<td><p>Unser Team</p></td>
			<td><p>Unsere Projekte</p></td>
			<td><p>Kontakt</p></td>
		</tr>
		
		<tr>
			<td><h1>Entwickeln für moderne Zukunft</h1></td>
			<td><img src=""></img></td>
		</tr>
	</table>
  <hr></hr>
  </header>
}