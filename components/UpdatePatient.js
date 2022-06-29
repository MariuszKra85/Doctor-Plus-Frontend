import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client/react';
import Head from 'next/head';
import { SINGLE_PATIENT_QUERY } from './SinglePatient';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const SINGLE_PATIENT_MUTATION = gql`
  mutation SINGLE_PATIENT_MUTATION(
    $id: ID!
    $name: String
    $surname: String
    $disease: String
    $description: String
  ) {
    updatePatient(
      id: $id
      data: {
        name: $name
        surname: $surname
        disease: $disease
        description: $description
      }
    ) {
      id
      name
      disease
    }
  }
`;

export default function UpdatePatient({ id }) {
  const { data, error, loading } = useQuery(SINGLE_PATIENT_QUERY, {
    variables: {
      id,
    },
  });

  const { inputs, handleChange, clearForm } = useForm({
    name: data?.Patient.name,
    surname: data?.Patient.surname,
    disease: data?.Patient.disease,
    description: data?.Patient.description,
    puls: data?.Patient.puls,
  });

  const [
    updatePatient,
    { data: updateData, error: UpdateError, loading: UpdateLoading },
  ] = useMutation(SINGLE_PATIENT_MUTATION, {
    variables: {
      id,
      name: inputs.name,
      disease: inputs.disease,
      description: inputs.description,
      puls: inputs.puls,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('dzial');
    const res = await updatePatient();
    console.log(res);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Head>
        <title>Add Patient ++</title>
      </Head>
      <fieldset
        disabled={loading || UpdateLoading}
        aria-busy={loading || UpdateLoading}
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="surname">
          Surname:
          <input
            type="text"
            nama="surname"
            id="surname"
            value={inputs.surname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="disease">
          Disease:
          <input
            type="text"
            name="disease"
            id="disease"
            value={inputs.disease}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="puls">
          Puls:
          <input
            type="text"
            name="puls"
            id="puls"
            value={inputs.puls}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Change details</button>
      </fieldset>
    </Form>
  );
}
