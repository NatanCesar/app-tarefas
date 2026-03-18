// ...existing code...
import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";

export default function AddTask() {
    const { addTask } = useTasks()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleAdd(e) {
        e.preventDefault()
        if (!title.trim()) return
        addTask(title.trim(), description.trim())
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleAdd} style={styles.container}>
            <h3>Adicionar Tarefa</h3>
            <input
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ padding: 8, width: '100%', marginBottom: 8 }}
            />
            <input
                placeholder="Descrição (opcional)"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ padding: 8, width: '100%', marginBottom: 8 }}
            />
            <button type="submit" style={styles.addBtn}>Adicionar tarefa</button>
        </form>
    );
}

const styles = {
    container: {
        maxWidth: 400,
        margin: 12,
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 6,
        fontFamily: "Arial, sans-serif",
    },
    addBtn: {
        padding: "8px 12px",
        marginBottom: 12,
        cursor: "pointer",
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 10px",
        border: "1px solid #eee",
        borderRadius: 4,
        background: "#fafafa",
    },
    removeBtn: {
        padding: "4px 8px",
        cursor: "pointer",
    },
};