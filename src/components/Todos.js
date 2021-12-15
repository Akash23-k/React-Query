import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

const Todos = () => {
  const { data, status } = useQuery("Todos", fetchData);
  console.log(data);

  return (
    <div>
      <h4>Todos</h4>
      {status === "loading" && <div>Loading data....</div>}
      {status === "error" && <div>Error in fetching data</div>}
      {status === "success" && (
        <div>
          {data.map((post) => {
            return (
              <div className="todo-title">
                <b>Todo: </b>
                {post.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todos;
