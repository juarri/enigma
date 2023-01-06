import { createStitches, PropertyValue } from "@stitches/react";
import { crimsonA, crimsonDarkA, grayA, grayDarkA } from "@radix-ui/colors";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      main1: crimsonA.crimsonA1,
      main2: crimsonA.crimsonA2,
      main3: crimsonA.crimsonA3,
      main4: crimsonA.crimsonA4,
      main5: crimsonA.crimsonA5,
      main6: crimsonA.crimsonA6,
      main7: crimsonA.crimsonA7,
      main8: crimsonA.crimsonA8,
      main9: crimsonA.crimsonA9,
      main10: crimsonA.crimsonA10,
      main11: crimsonA.crimsonA11,
      main12: crimsonA.crimsonA12,

      ...grayA,
    },
    space: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    sizes: {
      0: "0rem",
      none: " none",
      xs: " 20rem",
      sm: " 24rem",
      md: " 28rem",
      lg: " 32rem",
      xl: " 36rem",
      xl2: " 42rem",
      xl3: " 48rem",
      xl4: " 56rem",
      xl5: " 64rem",
      xl6: " 72rem",
      xl7: " 80rem",
      full: "100%",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xl2: "1.5rem",
      xl3: "1.875rem",
      xl4: "2.25rem",
      xl5: "3rem",
      xl6: "3.75rem",
      xl7: "4.5rem",
      xl8: "6rem",
      xl9: "8rem",
    },
    radii: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      xl2: "1rem",
      xl3: "1.5rem",
      full: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
      8: "800",
      9: "900",
      max: "999",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    dis: (value: PropertyValue<"display">) => ({
      display: value,
    }),

    pos: (value: PropertyValue<"position">) => ({
      position: value,
    }),

    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: PropertyValue<"flexDirection">) => ({ flexDirection: value }),
    fw: (value: PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: PropertyValue<"alignItems">) => ({ alignItems: value }),
    ac: (value: PropertyValue<"alignContent">) => ({ alignContent: value }),
    jc: (value: PropertyValue<"justifyContent">) => ({ justifyContent: value }),
    as: (value: PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: PropertyValue<"flexShrink">) => ({ flexShrink: value }),
    fb: (value: PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bgc: (value: PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    bc: (value: PropertyValue<"borderColor">) => ({
      borderColor: value,
    }),

    bw: (value: PropertyValue<"borderWidth">) => ({
      borderWidth: value,
    }),

    br: (value: PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: PropertyValue<"lineHeight">) => ({ lineHeight: value }),

    ox: (value: PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: PropertyValue<"pointerEvents">) => ({ pointerEvents: value }),
    us: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
  media: {
    xs: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",

    rm: `@media (prefers-reduced-motion)`,

    hover: `@media (hover: hover)`,

    dark: `@media (prefers-color-scheme: dark)`,
    light: `@media (prefers-color-scheme: light)`,
  },
});

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    main1: crimsonDarkA.crimsonA1,
    main2: crimsonDarkA.crimsonA2,
    main3: crimsonDarkA.crimsonA3,
    main4: crimsonDarkA.crimsonA4,
    main5: crimsonDarkA.crimsonA5,
    main6: crimsonDarkA.crimsonA6,
    main7: crimsonDarkA.crimsonA7,
    main8: crimsonDarkA.crimsonA8,
    main9: crimsonDarkA.crimsonA9,
    main10: crimsonDarkA.crimsonA10,
    main11: crimsonDarkA.crimsonA11,
    main12: crimsonDarkA.crimsonA12,

    ...grayA,
  },
});
