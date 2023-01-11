import { styled } from "@/styles/stitches.config";

const Section = styled("section", {
  px: "$4",
  py: "$4",

  "@sm": {
    px: "$6",
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
