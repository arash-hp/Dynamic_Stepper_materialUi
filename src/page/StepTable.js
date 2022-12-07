import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSteps, getSteps } from "../api/StepApi";

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
  const [dataSteps, setDataSteps] = React.useState([]);
  const [StepId, setStepId] = React.useState("");
  const [disable, setDisable] = React.useState(false);
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.counter.step?.steps);
  const navigate = useNavigate();
  React.useEffect(() => {
    setDisable(true);
    getSteps().then((res) => {
      const data = res?.data.ProcessPipe;
      setDisable(false);
      setDataSteps(data);
    });
  }, [StepId]);

  const handleRemove = (id) => {
    setDisable(true);
    deleteSteps(id).then((res) => {
      setStepId(id);
      setDisable(false);
    });
  };

  return (
    <Grid sx={rootStyles}>
      {dataSteps.map((step, index) => {
        return (
          <TableContainer
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Table aria-label="customized table" sx={{ marginTop: "16px" }}>
              <TableHead sx={{ backgroundColor: "background.table" }}>
                <TableRow style={{ color: "text.white" }}>
                  <StyledTableCell align="center">step</StyledTableCell>
                  <StyledTableCell align="center">name</StyledTableCell>
                  <StyledTableCell align="center">family</StyledTableCell>
                  <StyledTableCell align="center">message</StyledTableCell>
                  <StyledTableCell align="center">product</StyledTableCell>
                  <StyledTableCell align="center">created_by</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {step.data?.map((item, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.family}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.message}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.product?.map((item) => `${item.value} `)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.created_by?.map((item) => `${item.value} `)}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Button
              disabled={disable}
              variant="contained"
              color="primary"
              type="button"
              onClick={() => handleRemove(step.id)}
            >
              Remove Steps
            </Button>
          </TableContainer>
        );
      })}
    </Grid>
  );
}
