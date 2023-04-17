import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { addDays } from "date-fns";
import api from "../../../config/api";


const initialValues = {
  name: "",
  email: "",
  phone: "",
  dataNascimento: "",
  cpf: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Endereço de email inválido")
    .required("Campo obrigatório"),
  name: Yup.string().required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  dataNascimento: Yup.date()
    .required("Campo obrigatório")
    .max(addDays(new Date(), 0), "A data não pode ser maior que a atual"),
  // .test('dataNascimento', 'Não é possivel colocar uma data futura', (value) => new Date(value) > new Date()),
  cpf: Yup.string()
    // .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
    .min(11, "CPF inválido")
    .max(11, "CPF inválido")
    .required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo Obrigatótio")
    .min(8, "Senha muito curta"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais")
    .required("Campo obrigatório")
    .min(8, "Senha muito curta"),
});

const onSubmit = async (
  values: typeof initialValues,
  { resetForm }: { resetForm: () => void }
) => {
  console.log(values);
  try {
    const response = await api.post("/users", {
      name: values.name,
      password: values.password,
      email: values.email,
      phone: values.phone,
      cpf: values.cpf,
      birthDate: values.dataNascimento,
    });

    window.location.href = "/Login";
    console.log(response);
    resetForm();
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = () => {
  return (
    <div className="sing">
      <div className="container">
        <div className="welcome-message">
          <h1>Crie a sua conta agora!</h1>
          <p>Insira as informações abaixo para criar uma conta.</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <Field name="name" type="text" placeholder="Digite o nome" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Digite o seu email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone:</label>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Digite o número de telefone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <Field name="dataNascimento" type="date" />
                <ErrorMessage
                  name="dataNascimento"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <Field
                  name="cpf"
                  type="cpf"
                  placeholder="Digite apenas números"
                />
                <ErrorMessage
                  name="cpf"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="senha">Nova Senha:</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Digite uma senha"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha:</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Digite uma senha"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit">Enviar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default SignUp;
