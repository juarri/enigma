import { styled } from "@/styles/stitches.config";

import Section from "@/components/layout/Section";
import SectionContainer from "@/components/layout/Container";

const Container = styled(SectionContainer, {
  display: "flex",
  justifyContent: "space-between",
});

const Link = styled("a", {
  "&:hover": {
    textDecoration: "underline",
  },
});

const Footer = () => {
  return (
    <Section as="footer">
      <Container>
        <Link href="https://juarri.com">by juarri</Link>
        <Link href="https://github.com/juarri/lips">github</Link>
      </Container>
    </Section>
  );
};

export default Footer;
