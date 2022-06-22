import { useMutation } from '@apollo/client/react';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const CREATE_DOCTOR_MUTATION = gql`
  mutation CREATE_DOCTOR_MUTATION(
    #variable passed in
    $name: String!
    $surname: String!
    $password: String!
    $role: String!
    $photo: Upload
    $email: String!
  ) {
    createUser(
      data: {
        name: $name
        surname: $surname
        password: $password
        email: $email
        role: $role
        photo: { create: { image: $photo, altText: $name } }
      }
    ) {
      id
      name
      email
      role
    }
  }
`;

const CreateDoctor = () => {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    surname: '',
    image: '',
    email: '',
    password: '',
    role: '',
  });

  const [createUser, { data, error, loading }] = useMutation(
    CREATE_DOCTOR_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    // submit to back end

    const res = await createUser();
    console.log(res);
    clearForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name of Doctor"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="surname">
          Surname:
          <input
            type="text"
            id="surname"
            required
            name="surname"
            placeholder="Surname of Doctor"
            value={inputs.surname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="photo">
          Photo:
          <input type="file" id="photo" name="photo" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email of Doctor"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="password of Doctor"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="Role">
          Role:
          <input
            type="text"
            id="role"
            name="role"
            list="role"
            required
            value={inputs.role}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit">+ Add Doctor</button>
    </Form>
  );
};
export default CreateDoctor;
