import format from "date-fns/format";

import CopyExample from "../../components/CopyExample";
import Nationality from "./Nationality";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const formatDate = (date) => {
  return format(new Date(date), "PPPPpp");
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableContacts = ({ data }) => {
  console.log(formatDate(data[0].dob.date));
  const classes = useStyles();
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Full name</TableCell>
            <TableCell align="left">Birthday</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar alt="Remy Sharp" src={row.picture.thumbnail} />
              </TableCell>
              <TableCell align="left">
                <Typography>{row.name.first} </Typography>
              </TableCell>
              <TableCell align="left">
                {formatDate(row.dob.date)} <br />
                <span>{row.dob.age}years</span>
              </TableCell>
              <TableCell align="left">
                {<CopyExample text={row.email} />}
              </TableCell>
              <TableCell align="left">
                {<CopyExample text={row.phone} />}
              </TableCell>
              <TableCell align="left">
                <Typography>
                  <strong>/{row.location.country}/</strong>
                </Typography>
                <Typography>
                  {row.location.street.number} {row.location.street.name},
                  {row.location.state}, {row.location.postcode}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Nationality data={row.nat} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContacts;
