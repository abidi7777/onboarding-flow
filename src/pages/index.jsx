import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import OnboardingSection from '../components/OnboardingSection';
import fetchProducts from '../utils/fetchProducts';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Onboarding Flow</title>
      </Head>
      <div className="container mx-auto flex min-h-screen w-screen items-center justify-center p-2">
        <OnboardingSection products={products} />
      </div>
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();

    return {
      props: { products },
    };
  } catch (e) {
    return {
      props: { products: [] },
    };
  }
}
