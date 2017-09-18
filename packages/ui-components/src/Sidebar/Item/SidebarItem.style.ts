import { spin } from "contiamo-ui-utils"

type Props = { theme: Theme; children?: Node }
export default ({ theme, children }: Props): {} => {
  // If we have children, style a caret.
  const caret: {} = children
    ? {
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        marginLeft: "auto",
        border: "4px solid transparent",
        borderLeftColor: theme.greys["20"],
        transition: ".15s transform ease"
      }
    : {}

  return {
    position: "relative",

    "& .header": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing / 2,
      borderTop: "1px solid",
      borderTopColor: theme.greys["10"],
      cursor: "pointer",
      outline: "none",
      backgroundColor: theme.greys.white
    },

    "& .header:hover": {
      backgroundColor: theme.greys["10"]
    },

    "&.open .header": {
      borderBottom: "1px solid",
      borderBottomColor: theme.greys["20"],
      fontWeight: 600,
      backgroundColor: theme.greys["10"]
    },

    // Caret styles begin here.
    "& .header::after": {
      ...caret
    },

    "&:hover .header::after": {
      borderLeftColor: theme.greys["80"]
    },

    "&.open .header.open::after": {
      // rotate the caret to face down when an item is open.
      transform: "translateX(-2px) rotate(90deg)",
      borderLeftColor: theme.greys["80"]
    },

    // Spinner for async items replaces a caret.
    "&.updating .header::after": {
      width: 16,
      height: 16,
      border: 0,
      borderRadius: "50%",
      boxShadow: `1px 0px 0px 0px ${theme.greys["70"]} inset`,
      animation: `.7s ${spin} linear infinite`
    },

    "& .content": {
      position: "relative",
      paddingLeft: theme.spacing
    }
  }
}
