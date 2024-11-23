import { useState } from "react";
import styles from "./Calculadora.module.css";

const Calculadora = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    function calcularResultado(evento) {
        evento.preventDefault();

        const numero1 = parseFloat(input1);
        const numero2 = parseFloat(input2);

        if (!isNaN(numero1) && numero1 > 0 && !isNaN(numero2) && numero2 > 0.5 && numero2 < 2.5) {
            const imc = numero1 / (numero2 * numero2);
            setResultado(imc.toFixed(2));

            let classifica;
            if (imc < 18.5) {
                classifica = "Abaixo do peso";
            } else 
            if (imc >= 18.5 && imc < 24.9) {
                classifica = "Peso normal";
            } else 
            if (imc >= 25 && imc < 29.9) {
                classifica = "Sobrepeso";
            } else {
                classifica = "Obesidade";
            }
            setClassificacao(classifica);
        } else {
            setResultado("Por favor, insira valores válidos para peso e altura.");
            setClassificacao('');
        }
    }

    return (
        <>
            <form onSubmit={calcularResultado}>
                <div className={styles.calculo}>
                    <h2 className={styles.subTitle}>Calcule o seu índice de massa corporal</h2>
                    <input onChange={(evento) => setInput1(evento.target.value)} value={input1} className={styles.calculoInputs} type="number" placeholder="Digite seu peso (kg)" min="0" step="0.1"/>
                    <input onChange={(evento) => setInput2(evento.target.value)} value={input2} className={styles.calculoInputs} type="number" placeholder="Digite sua altura (m)" min="0.5" max="2.5" step="0.01"
                    />
                    <button className={styles.calculoButton} type="submit">Calcular</button>
                    {resultado && <p className={styles.resultado}>RESULTADO: {resultado}</p>}
                    {classificacao && <p className={styles.resultado}>Classificação: {classificacao}</p>}
                </div>
            </form>
        </>
    );
};

export default Calculadora;
