import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client/react';
import useForm from '../lib/useForm';
import Form from './styles/Form';

// todo query doctor
const SINGLE_DOCTOR_QUERY = gql`
  query SINGLE_DOCTOR_QUERY($id: ID!) {
    User(where: { id: $id }) {
      name
      surname
      role
      email
      appointment {
        name
      }
    }
  }
`;
// mutation doctor
const SINGLE_DOCTOR_MUTATION = gql`
  mutation SINGLE_DOCTOR_UPDATE(
    $id: ID!
    $name: String
    $surname: String
    $role: String
    $email: String
  ) {
    updateUser(
      id: $id
      data: { name: $name, surname: $surname, role: $role, email: $email }
    ) {
      id
      name
      surname
      role
    }
  }
`;

export default function UpdateDoctor({ id }) {
  const { data, error, loading } = useQuery(SINGLE_DOCTOR_QUERY, {
    variables: {
      id,
    },
  });
  const { inputs, handleChange } = useForm(data?.User);
  const [
    updateDoctor,
    { data: UpdateData, error: UpdateError, loading: UpdateLoading },
  ] = useMutation(SINGLE_DOCTOR_MUTATION, {
    variables: {
      id,
      name: inputs.name,
      surname: inputs.surname,
      role: inputs.role,
      email: inputs.email,
    },
  });

  if (loading) return <p>loading...</p>;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateDoctor();
    console.log(res);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset aria-busy={UpdateLoading} disabled={UpdateLoading}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="surname">
          <input
            type="text"
            name="surname"
            id="surname"
            value={inputs.surname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="role">
          <input
            type="text"
            id="role"
            name="role"
            value={inputs.role}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Change</button>
      </fieldset>
    </Form>
  );
}
