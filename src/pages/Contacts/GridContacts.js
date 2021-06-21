import format from "date-fns/format";

import CopyExample from "../../components/CopyExample";
import Nationality from "./Nationality";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    minHeight: 300,
  },
}));

export const GridContacts = ({ data }) => {
  const classes = useStyles();

  const formatDate = (date) => {
    return format(new Date(date), "PPPPpp");
  };

  return (
    <Grid container spacing={3}>
      {data.map((contact) => (
        <Grid key={contact.login.uuid} item xs={4}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />

              <Typography variant="h6" component="h2">
                {contact.name.first}
              </Typography>
              <Typography>
                {formatDate(contact.dob.date)} <br />
                <span>{contact.dob.age}years</span>
              </Typography>
              <Typography> {<CopyExample text={contact.email} />}</Typography>
              <Typography> {<CopyExample text={contact.phone} />}</Typography>
              <Typography>
                <strong>/{contact.location.country}/</strong>
              </Typography>
              <Typography>
                {contact.location.street.number}
                {contact.location.street.name},{contact.location.state},
                {contact.location.postcode}
              </Typography>
              <Typography>
                <Nationality data={contact.nat} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
