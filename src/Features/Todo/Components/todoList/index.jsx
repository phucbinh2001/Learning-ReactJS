import queryString from "query-string";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoPage from "../../Pages/todoPage";
import "./style.css";


export default function TodoList() {
  const todoList = [
    { id: 1, title: "Eat", isComplete: "new" },
    { id: 2, title: "Code", isComplete: "done" },
    { id: 3, title: "Sleep", isComplete: "done" },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [Todo, setTodo] = useState(todoList);
  const [Filter, setFilter] = useState(() => {
    //VD: param = {status: new}
    const param = queryString.parse(location.search);
    return param.status || "all";
  });

  //Nếu param thay đổi thì cập nhật filter
  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilter(param.status || "all");
  }, [location.search]);

  //Chuyển trạng thái task
  const handleTodo = (statusTask, index) => {
    const newTodoList = [...Todo];
    const isComplete = newTodoList[index].isComplete;
    newTodoList[index].isComplete = (isComplete==="new") ? "done" : "new";
    setTodo(newTodoList);
  };

  //Đổi đường dẫn
  const handleFilter = (filter) => {
    const queryParam = { status: filter };
    //history.push để đổi đường dẫn
    history.push({
      //lấy path: todolist
      pathname: match.path,
      //lấy param:  ?status=new
      search: queryString.stringify(queryParam),
    });
  };

  //Filter data
  const todoFilter = Todo.filter(
    (todo) => Filter === "all" || Filter === todo.isComplete
  );

  return (
    <>
      <ul>
        <TodoPage todoOnClick={handleTodo} todoList={todoFilter} />
      </ul>
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("new")}>New</button>
      <button onClick={() => handleFilter("done")}>Complete</button>
    </>
  );
}
