import "./App.css";
import {
  createMuiTheme,
  CssBaseline,
  // CssBaseline,
  // makeStyles,
  ThemeProvider,
} from "@material-ui/core";

// import Dashboard from "../components/Dashboard";
import { makeStyles } from "@material-ui/core/styles";

import store from "../utils/store";
import { Provider } from "react-redux";
import AppRouter from '../routers/AppRouter';


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
  // const classes = useStyles();
  // const disappear = localStorage.getItem("me") ? true : false
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <AppRouter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
