import { Card } from "./Card";
import { CardList } from "./CardList";
import { useState } from "react";

export function useList() {
  const [list, setList] = useState([
    // {
    //   id: "1",
    //   title: "Хлеб",
    //   done: false,
    // },
    // {
    //   id: "2",
    //   title: "Молоко",
    //   done: false,
    // },
    // {
    //   id: "3",
    //   title: "Сметана",
    //   done: false,
    // },
  ]);

  // Создать новый элемент.
  const createItem = (id, title) => {
    setList([...list, { id: new Date(), title: "", done: false }]);
    console.log(list);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */

  const setItemTitle = (id, title) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { id: id, title: title, done: false };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { id: id, title: item.title, done: true };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList(list.filter((item) => item.title !== ""));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
