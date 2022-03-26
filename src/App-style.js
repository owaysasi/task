const AppStyle = (theme) => ({
  mainContainer: {
    marginTop: 50,
    position: "relative",
  },
  addCounterButtonContainer: {
    position: "absolute",
    bottom: 106,
    right: 96,
  },
  notAllowed: {
    "@media (max-width: 1100px)": {
      left: 32,
    },
    opacity: ({ error }) => (error ? 1 : 0),
    position: "absolute",
    top: 80,
    left: 96,
    borderRadius: "50px",
    border: "2px red solid",
    padding: "0px 20px",
    transition: ".5s ease-out",
  },
  resultContainer: {
    marginTop: 40,
    textAlign: "center",
  },

  counterContainer: {
    marginBottom: 20,
    "&:hover div": {
      opacity: 1,
    },
  },
  deleteButton: {
    opacity: 0,
  },
});

export default AppStyle;
