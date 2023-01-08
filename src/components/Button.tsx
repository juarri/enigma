import { styled } from "@/styles/stitches.config";

const Button = styled("button", {
  boxSizing: "border-box",

  position: "relative",
  width: "fit-content",
  height: "fit-content",

  display: "inline-flex",
  gap: "$4",
  alignItems: "center",

  fontWeight: "$medium",

  borderRadius: "$md",

  variants: {
    type: {
      base: {
        color: "$main11",
        backgroundColor: "$main4",

        borderColor: "$main7",

        "&:hover": {
          backgroundColor: "$main5",
          borderColor: "$main8",
        },

        "@dark": {
          // color: "$main12",
        },
      },
      primary: {
        color: "$main1",
        backgroundColor: "$main9",

        "&:hover": {
          backgroundColor: "$main10",
        },

        "@dark": {
          // color: "$main12",
        },
      },
    },
    size: {
      sm: {
        padding: "$1_5 $4",
        fontSize: "$xs",
      },
      base: {
        padding: "$2 $5",
        fontSize: "$sm",
      },
      lg: {
        padding: "$2_5 $6",
        fontSize: "$lg",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
  defaultVariants: {
    type: "base",
    size: "base",
  },
});

export default Button;
