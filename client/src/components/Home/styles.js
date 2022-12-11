import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    marginBottom: "1rem",
    display: "flex",
    padding: "3px",
    paddingLeft: "30px",
    background: "#FFF",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  searchBtn: {
    flex: "90%",
  },
  inputSearch: {
    flex: "10%",
    background: "#48C5EE",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: "#fff",
    fontSize: "3rem",
    borderRadius: 0
  },
}));
