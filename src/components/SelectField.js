import { Avatar, Box, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Field, useField } from "formik";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


export const SelectField = (props) => {
  const [field, meta] = useField(props);
  const [, , { setValue }] = useField(props);
  const { step, data } = props;
  const [selected, setSelected] = useState([]);

  const removeSelected = (value) => {
    return value;
  };

  useEffect(()=>{
    if (meta.value === '') {
      setSelected([])
    }
  },[meta.value])

  return (
    <Grid p={2}>
      <Stack spacing={3}>
        <Autocomplete
          value={selected?.map((item) => item)}
          onChange={(value, newValue) => {
            setSelected(newValue)
            setValue(newValue)
          }}
          // removeOption={true}
          multiple
          id="tags-outlined"
          options={data}
          getOptionLabel={(option) => option.value}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={option.logo}
                // srcSet={option.logo}
                alt=""
              />
              {option.value}
            </Box>
          )}
          // defaultValue={tags[1]}
          filterSelectedOptions
          renderInput={(params) => (
            <>
              <TextField type="text" {...params} {...field} {...props} />
            </>
          )}
        />
      </Stack>
      {meta.error && meta.touched && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </Grid>
  );
};

// // // https://a4baz.com/assets/images/safe.png

// import React, { useCallback, useEffect } from "react";
// import Chip from "@material-ui/core/Chip";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import { useField, useFormikContext } from "formik";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       width: 500,
//       "& > * + *": {
//         marginTop: theme.spacing(3),
//       },
//     },
//   })
// );

// const userList = [
//   { id: 1, name: "name 1" },
//   { id: 2, name: "name 2" },
//   { id: 3, name: "name 3" },
//   { id: 4, name: "name 4" },
//   { id: 5, name: "name 5" },
// ];

// export function SelectField(props) {
//   const classes = useStyles();
//   const [field, meta] = useField(props);

//   const [value, setValue] = React.useState([userList[0].name]);
//   // const [stepNumber, setStepNumber] = React.useState("steps[0].description");

//   const { values, setValues, errors, dirty } = useFormikContext();

//   // useEffect(() => {
//   //   const stepName = field?.name;
//   //   setStepNumber(stepName);
//   //   if(stepName === field?.name){
//   //     setValue('')
//   //   }
//   // }, [stepNumber]);

//   //  step = useCallback(() => {
//   //   setValue('');
//   // }, [value]);
// console.log(values)
//   return (
//     <div className={classes.root}>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//           // setValues(newValue)
//         }}
//         multiple
//         id="tags-filled"
//         options={userList.map((option) => option.name)}
//         freeSolo
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               variant="outlined"
//               label={option}
//               {...getTagProps({ index })}
//             />
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             variant="filled"
//             label="Users"
//             placeholder="Search"
//           />
//         )}
//       />
//       <button
//         onClick={() => {
//           setValue("");
//         }}
//       >
//         Clear Value
//       </button>
//     </div>
//   );
// }
