import React from "react";
import './ListResult.css'

function ListResult(props) {
  console.log(props.data);
  const getList = props.data.map((data) => {
    return (
      <div className="list-card">
        <h2>Title：{data.original_title} </h2>
        <p>Overview： {data.overview} </p>
      </div>
    );
  });
  console.log(getList);
  return <div className="LsitResult">{getList}</div>;
}

export default ListResult;
