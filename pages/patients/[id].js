import SinglePatient from '../../components/SinglePatient';

const SinglePatientPage = ({ query }) => (
  <>
    <SinglePatient id={query.id} />
  </>
);

export default SinglePatientPage;
