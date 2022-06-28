import SingleDoctor from '../../components/SingleDoctor';

const SingleDoctorPage = ({ query }) => (
  <>
    <SingleDoctor id={query.id} />
  </>
);

export default SingleDoctorPage;
