import { styled } from "@/styles/stitches.config";

const Section = styled("section", {
  px: "$3",
  py: "$4",

  "@xs": {
    px: "$4",
  },

  "@sm": {
    px: "$6",
    py: "$5",
  },

  "@md": {
    px: "$8",
  },

  variants: {
    fullWidth: {
      true: {
        px: "none",
      },
    },
  },
});

export default Section;
