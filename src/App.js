import Counter from "./components/counter";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppStyle from "./App-style";

const useStyles = makeStyles(AppStyle);

function App() {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  const [error, setError] = useState(false);
  const classes = useStyles({ error });

  const onIncrement = (number, id) => {
    const index = data.findIndex((x) => x.id === id);
    const newArray = data;
    newArray[index].value = data[index].value + Number(number);
    setData([...newArray]);
  };

  const onDecrement = (number, id) => {
    const index = data.findIndex((x) => x.id === id);
    const newArray = data;
    newArray[index].value = data[index].value - Number(number);
    setData([...newArray]);
  };

  const autoGenerateID = () => {
    return Number((1000000 * Math.random()).toFixed());
  };

  const totalCount = () => {
    let counter = 0;
    data.forEach((x) => {
      counter = counter + x.value;
    });
    return counter;
  };

  const averageCount = () => {
    return totalCount() / data.length;
  };

  const addNewCounter = () => {
    setData([...data, { id: autoGenerateID(), value: 0 }]);
  };

  const removeCounter = (id) => {
    if (data.length > 3) {
      const newArray = data.filter((x) => x.id !== id);
      setData([...newArray]);
    } else if (!error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  };

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {data.length > 0
        ? data.map((item) => (
            <Counter
              key={item.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              removeCounter={removeCounter}
              item={item}
            />
          ))
        : null}
      <Grid item className={classes.addCounterButtonContainer}>
        <Button
          disableRipple
          variant="outlined"
          onClick={() => addNewCounter()}
        >
          Add Counter
        </Button>
      </Grid>
      <Grid item className={classes.resultContainer}>
        <Typography variant="h4" color={totalCount() < 0 ? "error" : "black"}>
          {`Total is : ${totalCount()}`}
        </Typography>
      </Grid>
      <Grid item className={classes.resultContainer}>
        <Typography variant="h4" color={averageCount() < 0 ? "error" : "black"}>
          {`Average per counter : ${averageCount().toFixed(2)}`}
        </Typography>
      </Grid>
      <Grid className={classes.notAllowed}>
        <Typography variant="h6" color={"error"}>
          {`NOT ALLOWED`}
        </Typography>
      </Grid>
      <Grid item>
        <p>
          "note: This practice should has at least three counters, and if you
          tried to make less than three counters. A message would pop up and
          tell you that's not allowed"
        </p>
      </Grid>
    </Grid>
  );
}

export default App;
