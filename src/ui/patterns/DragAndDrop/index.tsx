import { FC, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FormContext } from "../Form";
import { BoxProps, DropResult, ItemTypes } from "./types";

export const Box: FC<BoxProps> = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      console.log("dropResult", dropResult);
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`${
        isDragging ? "bg-gray-500 transform scale-110" : ""
      } border-dashed border-gray-400 p-2 mr-3 mb-3 cursor-move`}
      data-testid={`box`}
    >
      {name}
    </div>
  );
};

export const Dustbin: FC = () => {
  const {
    formState: { scentNotes },
    dispatch,
  } = useContext(FormContext);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: ({ name }: { name: string }) => {
      if (scentNotes.includes(name)) {
        dispatch({
          type: "UPDATE_SCENT_NOTES",
          payload: scentNotes.filter((item) => item !== name),
        });
      }
      console.log(scentNotes);
      const merrr = [...scentNotes, name];
      console.log(merrr);
      dispatch({ type: "UPDATE_SCENT_NOTES", payload: [...scentNotes, name] });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropResults: monitor.getDropResult(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <>
      {isActive ? "Release to drop" : "Drag a box here"}
      <div
        ref={drop}
        style={{ width: "800px", height: "400px" }}
        className={`mb-3 text-black p-2 text-center font-medium rounded-md bg-black-alpha-500 border border-black ${
          isActive
            ? "bg-green-600"
            : canDrop
            ? "bg-yellow-400"
            : "bg-black-alpha-500"
        }`}
        data-testid='dustbin'
      >
        <ul>
          {scentNotes.map((scentNote) => {
            return (
              <li key={scentNote}>
                <Box name={scentNote} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

function DragAndDrop() {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <Dustbin />
      <div className='mb-0 mt-5'>
        <Box name='Glass' />
        <Box name='Banana' />
        <Box name='Paper' />
      </div>
    </div>
  );
}

export default DragAndDrop;
