import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { ALL_PATIENTS_QUERY } from './Patients';

const ADD_PATIENT_MUTATION = gql`
  mutation ADD_PATIENT(
    $name: String!
    $surname: String
    $description: String
    $disease: String
    $bloodTest: Boolean
    $puls: String
  ) {
    createPatient(
      data: {
        name: $name
        surname: $surname
        description: $description
        disease: $disease
        puls: $puls
        bloodTest: $bloodTest
      }
    ) {
      id
      name
      surname
      bloodTest
      puls
    }
  }
`;

export default function CreatePatient() {
  // create state to handle form
  const { inputs, handleChange, clearForm } = useForm();
  console.log(inputs);

  const [createPatient, { data, error, loading }] = useMutation(
    ADD_PATIENT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PATIENTS_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);

    const res = await createPatient();
    console.log(res);
    Router.push({
      pathname: `/patients/${res.data.createPatient.id}`,
    });
  }

  return (
    // create form to add patients
    <Form onSubmit={handleSubmit}>
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="id"
            placeholder="Put a name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="surname">
          Surname:
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Put Surname"
            value={inputs.surname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Put description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="disease">
          Disease:
          <input
            type="text"
            name="disease"
            id="disease"
            placeholder="Put diseas"
            value={inputs.disease}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="puls">
          Puls:
          <input
            type="text"
            name="puls"
            id="puls"
            placeholder="Put puls"
            value={inputs.puls}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bloodTest">
          Blood Test:
          <input
            type="checkbox"
            name="bloodTest"
            id="bloodTest"
            placeholder="Put "
            value={inputs.bloodTest}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Patient</button>
      </fieldset>
    </Form>
  );
}
