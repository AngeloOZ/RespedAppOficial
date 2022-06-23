import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionItem = ({title, children}) => {
  return (
    <Accordion sx={{ marginBottom: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
