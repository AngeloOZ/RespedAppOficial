import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import { Button, ListItem, List,Table, TableBody, TableCell, TableHead, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


const ListObjeto = ({ item, index,tipo }) => {
 
  return (
    <List sx={{padding:0}} >
    <Draggable draggableId={item.id} index={index}> 
      {(provided, snapshot) => {
        return (
          <ListItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{
              display: "inline-grid",
              justifyItems: "center",
              alignItems: "center",
              border:1,
              padding:0,margin:0,
              backgroundColor: 'white'
            }}
          >
            {tipo==1? <HomeIcon/>:null}
            <p>1234</p>
            <Button>Ver</Button>
             
            </ListItem>
        );
      }}
    </Draggable>
    </List>
  );
};

export default ListObjeto;
