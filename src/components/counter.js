import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AppStyle from "../App-style";
import { IconButton } from "@mui/material";
import { Grid, TextField, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles(AppStyle);

function Counter(props) {
  const { item, onIncrement, onDecrement, removeCounter, key } = props;

  const classes = useStyles(props);

  const [amount, setAmount] = useState(1);

  const changeAmount = (e) => {
    setAmount(Math.abs(Number(e.target.value)));
  };

  return (
    <Grid
      xs={6}
      container
      key={key}
      direction="row"
      spacing={2}
      className={classes.counterContainer}
    >
      <Grid item xs>
        <IconButton
          variant="outlined"
          color="error"
          onClick={() => onDecrement(amount, item.id)}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Typography color={item.value < 0 ? "error" : "black"} variant="h5">
          {item.value}
        </Typography>
      </Grid>
      <Grid item xs>
        <IconButton
          variant="outlined"
          color="info"
          onClick={() => onIncrement(amount, item.id)}
        >
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <TextField
          type="number"
          size="small"
          placeholder={`Amount:${amount}`}
          variant="outlined"
          onChange={(e) => changeAmount(e)}
        />
      </Grid>
      <Grid item className={classes.deleteButton}>
        <div>
          <IconButton
            variant="outlined"
            color="info"
            onClick={() => removeCounter(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}

export default Counter;
