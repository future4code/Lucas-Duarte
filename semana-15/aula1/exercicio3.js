// EXERCÍCIO 3
const task = process.argv[2]

const fs = require('fs')
const taskList = 'taskList.txt'

if (task) {

    fs.appendFileSync(taskList, `- ${task}` + "\n");
    console.log("Tarefa adicionada com sucesso!")

    const newList = fs.readFileSync(taskList, 'utf8')
    console.log(`Tarefas:\n${newList}`)

} else {
    console.log("Mande um único parâmetro com A TAREFA que você quer adicionar.")
}