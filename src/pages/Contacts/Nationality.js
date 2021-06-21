import { Box } from "@material-ui/core";
import nameCountry from "../../data/country.json";

const Nationality = ({ data }) => {
  const returnNationality = () => {
    switch (data) {
      case data:
        return nameCountry[data];
      default:
        return console.log("sss");
    }
  };
  return <Box>{returnNationality}</Box>;
};

export default Nationality;
