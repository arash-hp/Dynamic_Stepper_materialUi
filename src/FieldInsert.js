import { Chip, FormControl, Input, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import "./styles.css";

export function FieldInsert() {
  const classes = useStyles();
  const [values, setValues] = useState([]);
  const [currValue, setCurrValue] = useState("");

  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      setValues((oldState) => [...oldState, e.target.value]);
      setCurrValue("");
    }
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (e) => {
    setCurrValue(e.target.value);
  };

  const handleDelete = (item, index) => {
    let arr = [...values];
    arr.splice(index, 1);
    console.log(item);
    setValues(arr);
  };

  return (
    <div className="App">
      <FormControl classes={{ root: classes.formControlRoot }}>
        <div className={"container"}>
          {values.map((item, index) => (
            <Chip
              size="small"
              onDelete={() => handleDelete(item, index)}
              label={item}
            />
          ))}
        </div>
        <Input
          style={{ border: "none" }}
          classes={{ root: classes.underline }}
          value={currValue}
          onChange={handleChange}
          onKeyDown={handleKeyUp}
        />
      </FormControl>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  underline: {
    margin: "4px",
    width: "100%",
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  formControlRoot: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    // width: "300px",
    flexWrap: "wrap",
    flexDirection: "row",
    border: "2px solid lightgray",
    padding: 4,
    marginBottom: 8,
    marginTop: 16,
    borderRadius: "4px",
    "&> div.container": {
      gap: "6px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    "& > div.container > span": {
      backgroundColor: "gray",
      padding: "1px 3px",
      borderRadius: "4px",
    },
  },
}));
