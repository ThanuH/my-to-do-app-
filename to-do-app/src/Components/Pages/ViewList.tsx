import React, { useEffect, useState } from "react";
import "../../Style/App.css";
import { Button, Card, Col, Row } from "antd";
import { text } from "stream/consumers";
import { useLocation } from "react-router-dom";
import qs from "qs";

const ViewList = () => {
  const state = useLocation();
  // const { title, description } = state;
  console.log(state.state);
  // const parsed = qs.parse(state);

  const [newList, setNewList] = useState<any>([]);
  useEffect(() => {
    console.log("state", state.state);
    setNewList(state.state);
  }, [newList]);

  const listClick = (index: any) => {
    console.log("Failed:", index);
  };

  return (
    <div className="App">
      <h1 className="Heading">To-Do-List</h1>
      <p className="Text">Lets Organize Your Day-To-Day Tasks</p>

      <Card
        title="To-do-List"
        className="site-card-border-less-wrapper"
        style={{ backgroundColor: "#68B3F9" }}
      >
        {newList.map((item: any, index: number) => (
          <Button
            style={{ backgroundColor: "#4788E8" }}
            size="small"
            onChange={(index) => listClick(index)}
          >
            <h3>{item.title} </h3>
            <p>{item.description}</p>
          </Button>
        ))}
      </Card>
    </div>
  );
};

export default ViewList;
