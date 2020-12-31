import "./App.css";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import SignInSide from "../components/SignInSide";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  // props: {
  //   MuiIconButton: {
  //     disableRipple: true,
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignInSide />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
