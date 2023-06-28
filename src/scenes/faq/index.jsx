import { Box, useTheme, Typography, colors} from "@mui/material";
import Header from "../../components/Header";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


return(
    <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions"/>

    <Accordian defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography color={colors.greenAccent[500]} variant="h5">
    An Important Question
    </Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Typography>
    Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
    </Typography>
    </AccordionDetails>
    </Accordian>

    <Accordian defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography color={colors.greenAccent[500]} variant="h5">
    Anonther Question
    </Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Typography>
    This is invaluable..! Such a great template to start off of for basically any kind of modern application. Thank you so much for putting this together!
    </Typography>
    </AccordionDetails>
    </Accordian>
    </Box>
);
};
export default FAQ;