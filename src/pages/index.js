import * as React from "react";
import { Card } from "../components/Card";
import { CardContainer } from "../components/CardContainer";

const IndexPage = () => {
  return (
    <main>
      <h1>Gatsby/React Playground</h1>
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
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
