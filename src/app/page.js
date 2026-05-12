'use client';

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("Pedro Portinha Nº31718 :)!");
    const [input, setInput] = useState("");

    const atualizarMensagem = () => {
        if (!input.trim()) return;
        setName(input);
        setInput("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Olá <span>{name}</span></h2>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escreve um nome..."
                />

                <div className={styles.buttons}>
                    <button onClick={() => setName("MUNDO!!!!")}>
                        Mudar para MUNDO
                    </button>

                    <button onClick={atualizarMensagem}>
                        Atualizar nome
                    </button>
                </div>
            </div>
        </div>
    );
}