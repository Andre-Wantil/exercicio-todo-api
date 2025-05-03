const db = require("./database");
const express = require("express");
const server = express();

server.use(express.json());

//Mensagem genérica
server.get("/", (_req, res) => {
    res.status(200).json({
        message:
            "EU GOSTO ASSIM, da sensação da dor e o sentimento de solidão deixados após ela ter te deixado, RECEBA!!!!!!!!!!1!!!1!!!1111!",
    });
});

//Enviar todas as tasks
server.get("/tasks", async (_req, res) => {
    const tasks = await db.list();
    res.status(200).json(tasks);
});

//Achar uma task por id
server.get("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const taskById = await db.get(id);
    res.status(200).json(taskById);
});

//Adicionar uma task
server.post("/tasks", async (req, res) => {
    const newTask = req.body;
    await db.insert(newTask);
    res.status(201).json({ message: "Tarefa adicionada" });
});

//Atualizar o titulo de uma tarefa
server.put("/tasks/:id", async (req, res) => {
    const id = req.params.id
    const newTitle = req.body.title
    const taskById = await db.get(id)
    taskById.title = newTitle
    await db.update(taskById)
    res.status(200).json(taskById)
})

//Completar ou descompletar uma tarefa
server.put("/tasks/:id/completed", async (req, res) => {
    const id = req.params.id
    const taskById = await db.get(id)
    taskById.completed = !taskById.completed
    await db.update(taskById)
    res.status(200).json(taskById)
})

//Deletar uma tarefa por id
server.delete("/tasks/:id", async (req, res) => {
    const id = req.params.id
    await db.del(id)
    res.status(200).json({ message: "Tarefa deletada" })
})

server.listen("3001", () =>
    console.log("ELA NÃO TE AMA AHAHAHAHHAHAHHAHAA!!!!!!!!!1!!!!!111!!")
);
