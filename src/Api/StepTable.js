// import React, { useEffect } from "react";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { getSteps } from "./StepApi";
// import { getStepsAction, increment } from "../redux/counterSlice";
// import { useDispatch, useSelector } from "react-redux";

// function createData(number, item, qty, price) {
//  return { number, item, qty, price };
// }

// export function StepTable() {
//   const dispatch = useDispatch()
//   const data = useSelector((state) => state.counter.step?.steps)
//   console.log(data)
//   useEffect(()=>{
//     // getSteps().then((res) =>console.log(res));
//     dispatch(getStepsAction())
//   },[dispatch])

//  return (
//    <TableContainer component={Paper}>
//      <Table aria-label="simple table">
//        <TableHead>
//          <TableRow>
//            <TableCell>S.No</TableCell>
//            <TableCell align="right">Item</TableCell>
//            <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
//            <TableCell align="right">Price&nbsp;($)</TableCell>
//          </TableRow>
//        </TableHead>
//        <TableBody>
//          {data?.map((row,index) => (
//            <TableRow key={index}>
//              <TableCell component="th" scope="row">
//                1
//              </TableCell>
//              <TableCell align="right">{row.name}</TableCell>
//              <TableCell align="right">{row.family}</TableCell>
//              <TableCell align="right">{row.description}</TableCell>
//              <TableCell align="right">{row.message}</TableCell>
//              <TableCell align="right">{row.created_by}</TableCell>
//            </TableRow>
//          ))}
//        </TableBody>
//      </Table>
//    </TableContainer>
//  );
// }

// // export default StepTable;

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStepsAction } from "../redux/counterSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background,
    color: theme.palette.text.white,
    fontSize: 14,
    padding: 4,
    height: "50px",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.text,
    color: theme.palette.primary,
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rootStyles = {
  border: "1px solid",
  borderColor: "background.table",
  borderRadius: "20px",
  overflow: "auto",
  flex: 1,
};
export function StepTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.step?.steps);
  console.log(data);
  // React.useEffect(() => {
  //   // getSteps().then((res) =>console.log(res));
  //   dispatch(getStepsAction());
  // }, [dispatch]);

  return (
    <Grid sx={rootStyles}>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead sx={{ backgroundColor: "background.table" }}>
            <TableRow style={{ color: "text.white" }}>
              <StyledTableCell align="center">step</StyledTableCell>
              <StyledTableCell align="center">تصویر</StyledTableCell>
              <StyledTableCell align="center">نام</StyledTableCell>
              <StyledTableCell align="center">شناسه محصول</StyledTableCell>
              <StyledTableCell align="center">موجودی</StyledTableCell>
              <StyledTableCell align="center">قیمت (تومان)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => {
              return (
                <StyledTableRow key={index} >
                  <StyledTableCell align="center">{index+1}</StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.family}</StyledTableCell>
                  <StyledTableCell align="center">{item.message}</StyledTableCell>
                  <StyledTableCell align="center">{item.family}</StyledTableCell>
                  <StyledTableCell align="center">{item.description}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
