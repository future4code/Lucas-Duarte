import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";

describe("Social network", () => {

    const createPost = (postText) => {
      const utils = render(<App />);
  
      const input = screen.getByPlaceholderText("Novo post");
  
      fireEvent.change(input, { target: { value: postText } });
  
      expect(input).toHaveValue(postText);
  
      const button = screen.getByText("Adicionar");
  
      fireEvent.click(button);
    }

    const createPostAndRender = () => {
        const utils = render(<App />);
    
        createPost("teste post");
    
        return utils;
      };
     
    test("App should create post", () => {
    // preparação
    const { getByText, getByPlaceholderText, findByText } = render( <App/> )

    const newPostInput = getByPlaceholderText('Novo post')
    const sendButton = getByText(/Adicionar/i)
    
    // execução

    fireEvent.change(newPostInput, {target: {value: "teste post"}})
    fireEvent.click(sendButton)

    //verificação
    expect(getByText("teste post")).toBeInTheDocument()
})


test("when user creates post, input should clean", () => {
    const {getByPlaceholderText} = createPostAndRender()

    const input = getByPlaceholderText("Novo post")

    expect(input).toHaveValue("")
})

})
