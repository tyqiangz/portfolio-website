import React, { Fragment } from "react";

import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

const IndexPage = () => {
  return (
    <Fragment>
      <Layout></Layout>
      <div className="section">
        <div className="container">
          <h1>Stocks Prediction</h1>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default IndexPage;
