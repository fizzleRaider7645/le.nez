import { FC, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { BoxProps, DropResult } from "./types";

const ItemTypes = {
  BOX: "box",
};

export const Box: FC<BoxProps> = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
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
        isDragging ? "opacity-50" : ""
      } border-dashed border-gray-400 p-2 mr-3 mb-3 cursor-move`}
      data-testid={`box`}
    >
      {name}
    </div>
  );
};

export const Dustbin: FC = () => {
  const [selectedScentNotes, setSelectedScentNotes] = useState<string[]>([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: ({ name }: { name: string }) => {
      setSelectedScentNotes([...selectedScentNotes, name]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropResults: monitor.getDropResult(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{ width: "800px", height: "400px" }}
      className={`mb-3 text-black p-2 text-center font-medium rounded-md bg-black-alpha-500 border border-black ${
        isActive
          ? "bg-green-600"
          : canDrop
          ? "bg-yellow-600"
          : "bg-black-alpha-500"
      }`}
      data-testid='dustbin'
    >
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
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
