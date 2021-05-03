import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = (count,title, offset = 0) =>
Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content:  ` ${title}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "white",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "#3282CE",
  padding: grid,
  width: 250,
});

export default function DraggableView() {
  const [title, setTitle] = useState("");

  const [state, setState] = useState([getItems(0,title), getItems(0,title, 0)]);

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <>
      <div className="h-full overflow-hidden flex items-center justify-center bg-blue-600">
        <div className="bg-blue w-full h-screen font-sans">
          <div className="flex p-2 bg-blue-dark items-center">
            <div className="hidden md:flex justify-start">
              <button className="bg-blue-light rounded p-2 font-bold text-white text-sm mr-2 flex">
                <svg
                  className="fill-current text-white h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
                </svg>
                Pannels
              </button>
              <input
                type="text"
                onChange={onChangeTitle}
                className="bg-blue-300 rounded p-2"
              ></input>
            </div>

            <div className="flex items-center ml-auto">
              <button
                className="bg-blue-light rounded h-8 w-16 font-bold text-white text-sm mr-2"
                type="button"
                onClick={() => {
                  setState([...state, getItems(1,title)]);
                }}
              >
                + NEW GROUPE
              </button>
              <button
                className="bg-blue-light rounded h-8 w-16 font-bold text-white text-sm mr-2"
                type="button"
                onClick={() => {
                  setState([...state, getItems(1,title)]);
                }}
              >
                + NEW ITEM
              </button>
            </div>
          </div>
          <div className="flex m-4 justify-between">
            <div className="flex">
              <ul className="list-reset text-white hidden md:flex">
                <li>
                  <span className="font-bold text-lg px-2">☆</span>
                </li>
                <li>
                  <span className="border-l border-blue-lighter px-2 text-sm">
                    Business Name
                  </span>{" "}
                  <span className="rounded-lg bg-blue-light text-xs px-2 py-1">
                    Free
                  </span>
                </li>
                <li>
                  <span className="border-l border-blue-lighter px-2 text-sm ml-2">
                    Team Visible
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex px-4 pb-8 items-start overflow-x-scroll">
            <div className="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
              <div className="flex justify-between py-1">
                <h3 className="text-sm">-------TO DO THIS WEEK</h3>
                <svg
                  className="h-4 fill-current text-grey-dark cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                </svg>
              </div>
            </div>
            <div className="rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3">
              <div className="flex justify-between py-1">
                <h3 className="text-sm">--------GONNA DO TODAY</h3>
                <svg
                  className="h-4 fill-current text-grey-dark cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                </svg>
              </div>
            </div>
            <div className="rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3">
              <div className="flex justify-between py-1">
                <h3 className="text-sm">----------TO REVIEW</h3>
                <svg
                  className="h-4 fill-current text-grey-dark cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div>
                <div style={{ display: "flex" }}>
                  <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
                      <Droppable key={ind} droppableId={`${ind}`}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                          >
                            {el.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      {item.content}
                                      <button
                                        type="button"
                                        className="bg-red-400"
                                        onClick={() => {
                                          const newState = [...state];
                                          newState[ind].splice(index, 1);
                                          setState(
                                            newState.filter(
                                              (group) => group.length
                                            )
                                          );
                                        }}
                                      >
                                        delete
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </DragDropContext>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
