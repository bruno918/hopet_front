import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import api from "../../../config/api";
import Swal from "sweetalert2";
interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Endereço de email inválido")
    .required("O email é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

interface Props {}

export const LoginForm: React.FC<Props> = () => {
  const [error, setError] = useState("");
  //criar um metodo de login que pegue os dados e faça um get, se obter active:true na resposta, o usuario loga por 1 dia
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await api.get<LoginResponse>(
        "/users/login/" + values.email
      );
      console.log(response);
      if (localStorage.getItem("id") !== null) {
        return Swal.fire({
          title: "Erro",
          text: "Você já está logado",
          icon: "error",
          confirmButtonText: "Cool",
        });
      } else {
        localStorage.setItem("id", response.data.id);
      }
      window.location.href = "/";
    } catch (error) {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="welcome-message">
          <h1>Bem-vindo de volta!</h1>
          <p>Por favor, faça login para continuar.</p>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Carregando..." : "Entrar"}
              </button>
              {error && <div className="error-message">{error}</div>}
            </Form>
          )}
        </Formik>
        <p className="signup-link">
          Não tem uma conta? <a href="/signUp">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};
