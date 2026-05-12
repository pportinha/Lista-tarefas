'use client';

import styles from "./page.module.css";
import { useState } from "react";

export default function Lista() {
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const adicionarTarefa = () => {
        if (!inputTexto.trim()) return;
        setLista((prev) => [...prev, inputTexto]);
        setInputTexto("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>📝 Lista de tarefas</h2>

                <div className={styles.inputGroup}>
                    <input
                        value={inputTexto}
                        onChange={(e) => setInputTexto(e.target.value)}
                        placeholder="O que precisas fazer?"
                    />
                    <button onClick={adicionarTarefa}>Adicionar</button>
                </div>

                <div className={styles.lista}>
                    {lista.map((item, index) => (
                        <div key={index} className={styles.tarefa}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}