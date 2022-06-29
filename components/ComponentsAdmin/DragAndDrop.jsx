import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { Grid, List, Table } from "@mui/material";
import { usePedidos } from "../../Hooks";


// fake data generator
const getItems = (count, prefix) =>
  Array.from({ length: count }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix,
      content: `coso ${randomId}`
    };
  });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["En Proceso", "Confirmado", "Preparando","Completado", "Finalizado"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(20, listKey) }),
    {}
  );

function DragList() {
   const pedidosLocales = usePedidos("local").pedidos;
   const pedidosDomicilio = usePedidos("domicilio").pedidos;
   const pedidosReserva = usePedidos("reserva").pedidos;
  const [elements, setElements] = React.useState(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container justifyContent={'center'}  >
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
              tipo={1}
              color0={
               listKey=="En Proceso"?'blue':
               listKey=="Confirmado"?'green':
               listKey=="Preparando"?'purple':
               listKey=="Completado"?'orange':'red'
               
            }
            />
          ))}
        </Grid>
      </DragDropContext>
  );
}

export default DragList;
