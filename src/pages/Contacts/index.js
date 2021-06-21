import useContacts from "./useContacts";
import TableContacts from "./TableContacts";
import { DATA_VIEW_MODE } from "./constants";
import { DataViewMode } from "./DataViewMode";
import { useDataViewMode } from "./useDataViewMode";
import { GridContacts } from "./GridContacts";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
}));

const Contacts = () => {
  const classes = useStyles();
  const [dataViewMode, setDataViewMode] = useDataViewMode();
  const { contacts, isLoading, error } = useContacts();

  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h4" component="h1">
                Contacts
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <DataViewMode
                dataViewMode={dataViewMode}
                setDataViewMode={setDataViewMode}
              />
            </Box>
          </Grid>
          {(() => {
            if (isLoading) {
              return <CircularProgress />;
            }
            if (error) {
              return <div>...error</div>;
            }
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <TableContacts data={contacts} />;
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return <GridContacts data={contacts} />;
            }
          })()}
        </Grid>
      </Container>
    </div>
  );
};

export default Contacts;
