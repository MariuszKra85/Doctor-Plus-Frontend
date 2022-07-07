import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { perPage } from '../config';

const ALL_DOCTORS_QUERY = gql`
  query {
    _allUsersMeta {
      count
    }
  }
`;

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default function Pagination({ page }) {
  const { data, loading, error } = useQuery(ALL_DOCTORS_QUERY);
  if (loading) return <p>loading...</p>;
  const { count } = data._allUsersMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>Doctor Plus - </Head>
      <Link href={`/doctorsPage/${page - 1}`} data-cool="true">
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        page {page} of {pageCount}
      </p>
      <Link href={`/doctorsPage/${parseInt(page) + 1}`} data-cool="true">
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
