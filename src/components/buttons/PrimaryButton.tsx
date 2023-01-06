import { styled } from "@/stitches/config";
import Button from "./Button";

const PrimaryButton = styled(Button, {
  c: "$main11",
  bgc: "$main1",

  bc: "$main7",
  bw: "$1",
  bs: "solid",

  "&:hover": {
    bgc: "$main2",
  },
});

export default PrimaryButton;
