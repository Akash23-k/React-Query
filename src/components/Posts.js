import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = () => {
  const { data, status } = useQuery("Posts", fetchData);

  return (
    <div>
      <h4>Posts</h4>
      {status === "loading" && <div>Loading data....</div>}
      {status === "error" && <div>Error in fetching data</div>}
      {status === "success" && (
        <div>
          {data.map((post) => {
            return (
              <div>
                <b>Title: </b>
                {post.title}
                <div className="post-message">
                  <b>Message: </b>
                  {post.body}
                </div>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
