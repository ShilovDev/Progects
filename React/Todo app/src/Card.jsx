import "./Card.css";
import { useList } from "./useList";
import { useRef, useEffect, useState } from "react";
export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
}) => {
  const myRef = useRef();

  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === "") {
      onDelete(id);
    }
  };

  // const useAutoFocus = () => {
  //   const setFocus = () => {
  //     myRef.current && myRef.current.focus();
  //   };

  //   return [myRef, setFocus];
  // };

  useEffect(() => {
    if (myRef.current && !myRef.current.value) {
      myRef.current.focus();
    }
  });

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        ref={myRef}
        // onFocus={useAutoFocus}
      />
    </form>
  );
};
