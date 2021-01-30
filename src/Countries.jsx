import React from 'react';
import { useQuery, gql } from '@apollo/client';

const COUNTRIES = gql`
  query {
    Country(first:10) {
      alpha3Code
      currencies {
        code
      }
      name
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Country.map(({ alpha3Code, currencies, name }) => (
    <div key={alpha3Code}>
      <p>
        ({alpha3Code}) {name}: {currencies?.[0]?.code}
      </p>
    </div>
  ));
}

export default Countries;
