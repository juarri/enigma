import { styled } from "@/styles/stitches.config";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/Button";

const Title = styled("h2", {
  fontSize: "$sm",
  fontWeight: "$medium",
});

type ResponsesProps = {
  username: string;
};

const Grid = styled("div", {
  display: "grid",
  gap: "$4",

  "@sm": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@xl": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const GridItem = styled("div", {
  padding: "$4 $6",

  backgroundColor: "$gray2",
});

const Message = styled("h3", {
  fontWeight: "$medium",
  lineHeight: "1.2",
});

const Response = styled("p", {
  // fontSize: "$sm",
});

const Responses = ({ username }: ResponsesProps) => {
  return (
    <Section>
      <Container css={{ maxWidth: "$xl6" }}>
        <Title>Responses</Title>
        <Grid>
          <GridItem>
            <Message>
              What's one thing you want to do that your havn't done
            </Message>
            <Response>Star in a movie</Response>
          </GridItem>
          <GridItem>
            <Message>
              What's one thing you want to do that your havn't done
            </Message>
            <Response>Star in a movie</Response>
          </GridItem>
          <GridItem>
            <Message>
              What's one thing you want to do that your havn't done
            </Message>
            <Response>Star in a movie</Response>
          </GridItem>
          <GridItem>
            <Message>
              What's one thing you want to do that your havn't done
            </Message>
            <Response>Star in a movie</Response>
          </GridItem>
          <GridItem>
            <Message>
              What's one thing you want to do that your havn't done
            </Message>
            <Response>Star in a movie</Response>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};

export default Responses;
