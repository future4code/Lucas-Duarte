import React from 'react';
import { render, fireEvent, screen, wait } from '@testing-library/react';
import App from './App';
import axios from 'axios'

test('tarefas estão renderizando', async() => {

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        day: "sunday",
        id: 123,
        text: "Teste",
        
      }
    ]
  })

  const {findByText} = render(<App/>)

  const task = await findByText("Teste")

  expect(task).toBeInTheDocument()

  await wait()
})