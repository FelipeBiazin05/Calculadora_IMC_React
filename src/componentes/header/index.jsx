import styles from "./Header.module.css";
import LogoIMC from "./imgHeader/IMC.png"

const Header = () => {
    return (
        <>
        <header className={styles.cabecalho}>
            <h1>Calculadora de IMC</h1>
            <img className={styles.logo} src={LogoIMC} alt="Logo da calculadora de IMC" />
        </header>
        </>
    )
}

export default Header;