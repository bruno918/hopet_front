import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import "./index.scss";
import { addDays } from 'date-fns';
import api from '../../config/api';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  cnpj: '',
  razaoSocial: '',
  nomeFantasia: '',
  nomeRepresentante: '',
  dataNascimento: '',
  cpf: '',
  picture: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().required('Campo obrigatório'),
  phone: Yup.string().required('Campo obrigatório'),
  cnpj: Yup.string().required('Campo obrigatório'),
  razaoSocial: Yup.string().required('Campo obrigatório'),
  nomeFantasia: Yup.string().required('Campo obrigatório'),
  nomeRepresentante: Yup.string().required('Campo obrigatório'),
  dataNascimento: Yup.date()
    .required('Campo obrigatório')
    .max(addDays(new Date(), 0), 'A data não pode ser no futuro'),
    // .test('dataNascimento', 'Não é possivel colocar uma data futura', (value) => new Date(value) > new Date()),
  cpf: Yup.string()
    .min(11,'CPF inválido')
    .max(11,'CPF inválido')
    .required('Campo obrigatório'),
    password: Yup.string()
    .required('Campo Obrigatótio')
    .min(8, 'Senha muito curta'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    .required('Campo obrigatório')
    .min(8, 'Senha muito curta')
});

// const onSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
//   const body = `
//     name: ${values.name}
//     email: ${values.email}
//     phone: ${values.phone}
//     dataNascimento: ${moment(values.dataNascimento).format('DD/MM/YYYY')}
//     cpf: ${values.cpf}
//     password: ${values.password}
//     confirmPassword: ${values.confirmPassword}
//     CNPJ: ${values.cnpj}
//     Razão Social: ${values.razaoSocial}
//     Nome Fantasia: ${values.nomeFantasia}
//     Nome Representante: ${values.nomeRepresentante}
//     Data de Nascimento: ${values.dataNascimento}
//     password: ${values.password}
//     confirmPassword: ${values.confirmPassword}
//   `;
  
//   resetForm();
// };
const onSubmit = async (
  values: typeof initialValues,
  { resetForm }: { resetForm: () => void }
) => {
  console.log(values);
  const petshop = {
    name: values.name,
    description: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
    cnpj: values.cnpj,
    razaoSocial: values.razaoSocial,
    nomeFantasia: values.nomeFantasia,
    nomeRepresentante: values.nomeRepresentante,
    dataNascimento: values.dataNascimento,
    cpf: values.cpf,
    picture: values.picture
  };

  try {
    const response = await api.post("/users", {
      name: values.name,
      password: values.password,
      email: values.email,
      phone: values.phone,
      cpf: values.cpf,
      birthDate: values.dataNascimento,
      petshop: petshop,
    });

    window.location.href = "/Login";
    console.log(response);
    resetForm();
  } catch (error) {
    console.log(error);
  }
};


export const Inform = () => {
  return (
    <div className="inform">
      <div className="container">
        <div className="welcome-message">
          <h1>Seja bem-vindo!</h1>
          <p>Insira as informações abaixo para se tornar nosso parceiro.</p>
        </div>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
            <label htmlFor="cnpj">CNPJ:</label>
            <Field 
                name="cnpj" 
                type="text" 
                placeholder="Digite o CNPJ da sua empresa"
            />
            <ErrorMessage 
                name="cnpj" 
                component="div"
                className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="razaoSocial">Razão Social:</label>
            <Field 
                name="razaoSocial" 
                type="text" 
                placeholder="Digite a razão social da sua empresa"
            />
            <ErrorMessage 
                name="razaoSocial" 
                component="div"
                className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomeFantasia">Nome Fantasia:</label>
            <Field 
                name="nomeFantasia" 
                type="text"
                placeholder="Digite o nome fantasia da sua empresa"
            />
            <ErrorMessage 
                name="nomeFantasia"
                component="div"
                className="error-message" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomeRepresentante">Nome do Representante:</label>
            <Field 
                name="nomeRepresentante" 
                type="text"
                placeholder="Digite o seu nome"
            />
            <ErrorMessage 
                name="nomeRepresentante"
                component="div"
                className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <Field 
                name="dataNascimento" 
                type="date"
            />
            <ErrorMessage 
                name="dataNascimento" 
                component="div"
                className="error-message"
            />
          </div>

          <div className="form-group" >
            <label htmlFor="cpf">CPF:</label>
            <Field 
                name="cpf" 
                type="text"
                placeholder="Digite apenas números"
            />
            <ErrorMessage 
                name="cpf" 
                component="div"
                className="error-message"
            />
          </div>
          <div className="form-group" >
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

          <div className="form-group" >
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

          <div className="form-group">
            <label htmlFor="picture">Foto Url:</label>
            <Field 
                name="picture" 
                type="text"
                placeholder="Digite a url da sua foto"
            />
            <ErrorMessage 
                name="nomeFantasia"
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
export default Inform;
