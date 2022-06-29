import { useQuery } from '@apollo/client/react/hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_DATA_QUERY = gql`
  query {
    allAppointments {
      name
      doctor {
        name
      }
    }
    allPatients {
      name
      doctor {
        name
      }
    }
    allUsers {
      name
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;
const Innerwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;
  div {
    margin-left: 2rem;
  }
`;

const StyledBar = styled.div`
  width: 300px;
  height: 20px;
  border: 2px solid black;
  margin: 0;
  p {
    margin: 0;
    background-color: ${(props) => {
      if (props.var > 0.26) {
        if (props.var > 0.56) {
          return 'red';
        }
        return 'yellow';
      }
      return 'green';
    }};
    height: 20px;
    width: calc(300px * ${(props) => props.var});
  }
`;

const Raport = () => {
  const { data, loading } = useQuery(ALL_DATA_QUERY);
  if (loading) return <p>loading...</p>;
  console.log(data);
  const allAppointmentValue = data.allAppointments.length;
  const checkAppointment = (doctor, appointmentList) => {
    let count = 0;

    appointmentList.map((e) => {
      if (doctor === e.doctor?.name) {
        count += 1;
      }

      return count;
    });
    return count;
  };
  const busyRates = (doctor, appointmentList) => {
    const val = checkAppointment(doctor, appointmentList) / allAppointmentValue;

    return val;
  };
  return (
    <Wrapper>
      <Innerwrapper>
        {data.allUsers.map((e) => (
          <div>
            <h1>doctor: {e.name}</h1>
            <p>
              how many appointment:{' '}
              {checkAppointment(e.name, data.allAppointments)}
            </p>
            <p>
              busy Rates: {busyRates(e.name, data.allAppointments).toFixed(2)}
            </p>
            <StyledBar var={busyRates(e.name, data.allAppointments)}>
              <p> </p>
            </StyledBar>
          </div>
        ))}
      </Innerwrapper>
    </Wrapper>
  );
};

export default Raport;
