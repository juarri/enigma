import { darkTheme, styled } from "@/styles/stitches.config";

const Button = styled("button", {
  boxSizing: "border-box",

  position: "relative",
  width: "fit-content",
  height: "fit-content",

  display: "inline-flex",
  gap: "$4",
  alignItems: "center",

  fontWeight: "$medium",
  lineHeight: "1",

  borderRadius: "$md",

  variants: {
    type: {
      base: {
        color: "$main11",
        backgroundColor: "$main1",

        borderWidth: "1px",
        borderColor: "$main7",

        "&:hover": {
          backgroundColor: "$main2",
          borderColor: "$main8",
        },

        [`.${darkTheme} &`]: {
          color: "$main12",
        },
      },
      primary: {
        color: "$main1",
        backgroundColor: "$main9",

        "&:hover": {
          backgroundColor: "$main10",
        },

        [`.${darkTheme} &`]: {
          color: "$main12",
        },
      },
    },
    size: {
      sm: {
        padding: "$1_5 $4",
        fontSize: "$xs",
      },
      base: {
        padding: "$2_5 $5",
        fontSize: "$sm",
      },
      lg: {
        padding: "$3_5 $6",
        fontSize: "$lg",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    rounded: {
      true: {
        borderRadius: "999px",
      },
    },
  },
  defaultVariants: {
    type: "base",
    size: "base",
  },
  compoundVariants: [
    {
      rounded: true,
      size: "sm",
      css: {
        padding: "$1",
      },
    },
    {
      rounded: true,
      size: "base",
      css: {
        padding: "$1",
      },
    },
    {
      rounded: true,
      size: "base",
      css: {
        padding: "$3",
      },
    },
  ],
});

export default Button;
