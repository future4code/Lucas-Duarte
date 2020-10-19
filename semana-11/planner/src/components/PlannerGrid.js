import React, {useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components'

import {url} from '../api/requisitions'


const PlannerGridContainer = styled.div`
    display: grid;
    height: 250vh;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    border: 1px solid black;
`

const DayContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

function PlannerGrid() {

    const [allTasks, setAllTasks] = useState([])

    useEffect( () => {
        getTasks()
    },[])


    const getTasks = () => {

        axios.
        get(`${url}`)

        .then( (response) => {
            setAllTasks(response.data)
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    const deleteTask = (taskId) => {

        axios.
        delete(`${url}/${taskId}`)

        .then( (response) => {
            getTasks()
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    const renderTasks = (day) => {
        const taskList = allTasks.map ( (task) => {
            if (task.day === day) {
                return (
                    <div key={task.id}>
                        <p>{task.text}</p>
                        <button onClick={() => deleteTask(task.id)}>Deletar</button>
                    </div>
                )
            }
        })

        return taskList
    }

    return (
        <div>

            <PlannerGridContainer>

                    <DayContainer>
                        <strong>Segunda</strong>
                        {renderTasks('monday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Terça</strong>
                        {renderTasks('tuesday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Quarta</strong>
                        {renderTasks('wednesday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Quinta</strong>
                        {renderTasks('thursday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Sexta</strong>
                        {renderTasks('friday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Sábado</strong>
                        {renderTasks('saturday')}
                    </DayContainer>

                    <DayContainer>
                        <strong>Domingo</strong>
                        {renderTasks('sunday')}
                    </DayContainer>
                })}

            </PlannerGridContainer>

        )
        })}

        </div>
    )
}

export default PlannerGrid