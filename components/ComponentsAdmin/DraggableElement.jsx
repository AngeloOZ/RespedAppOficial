import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ListObjeto from "./ListObjeto";
import { Grid, Typography} from "@mui/material";

const DraggableElement = ({ prefix, elements,color0,tipo}) => (
  <Grid xs={2}  margin={2} backgroundColor='#d4d4d4'>
   <div align='center'>
   <Typography backgroundColor={color0} color={'white'}>{prefix}</Typography>
   </div>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListObjeto key={item.id} item={item} index={index} tipo={tipo}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Grid>
);

export default DraggableElement;
