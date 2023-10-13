import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  dashboardcards: {
    // marginTop: "2rem",
    // marginLeft: "1rem",
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "3rem",
  },
  label: {
    fontSize: "1rem",
    marginTop: ".9rem",
    fontWeight: "lighter",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  desc: {
    fontSize: ".7rem",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  descbold: {
    fontWeight: "bold",
  },
}));
