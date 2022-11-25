import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";

describe("Login Component", () => {
    it("Deve Encontrar os elementos do Formulario na tela de Login", () => {
      render(<App />);
      const buttonEntrar = screen.queryByText("Entrar");
      const passwordInput = screen.queryByText("Senha:");
      const emailInput = screen.queryByText("Email:");
  
      expect(buttonEntrar).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });
  
    it("Deve Fazer Login sem dados e pegar a mensagem de erro", async () => {
      render(<App />);
      const buttonSubmit = screen.queryByText("Entrar");
  
      userEvent.click(buttonSubmit);
      
      const messageError = await screen.findByText("Email ou senha em formato incorreto.");
      
      expect(buttonSubmit).toBeInTheDocument();
      expect(messageError).toBeInTheDocument();
    });
  
    it("Deve Fazer Login com dados vãlidos e Errados para pegar a mensagem de erro", async () => {
      render(<App />);
  
      const passwordInput = screen.queryByText("Senha:");
      const emailInput = screen.queryByText("Email:");
  
      userEvent.type(passwordInput, "$$??010Hard");
      userEvent.type(emailInput, "iambatman@gmail.com");
  
      const buttonSubmit = screen.queryByText("Entrar");
      
      userEvent.click(buttonSubmit);
      
      const messageError = await screen.findByText("Usuário ou senha incorretos.");
      expect(messageError).toBeInTheDocument();
    });
  
  });