import * as React from "react";
import { Card } from "../components/cards/Card";
import { CardContainer } from "../components/cards/CardContainer";
import { Layout } from "../components/layouts/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>✨ Gatsby/React Playground ✨</h1>
      <h2>🃏 Cards Example</h2>
      <CardContainer>
        <Card
          title="Card 1"
          description="This card is unique so here's a cool description."
        />
        <Card
          title="Card 2"
          description="This card is also unique, with its own description."
        />
      </CardContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
