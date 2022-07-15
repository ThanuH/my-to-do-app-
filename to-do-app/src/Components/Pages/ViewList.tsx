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

  const listClick = (event:any ,index:number) => {
    console.log("Failed:",index );
  };

  return (
    <div className="App">
      <h1 className="Heading">To-Do-List</h1>
      <p className="Text">Lets Organize Your Day-To-Day Tasks</p>

      <Card
        title="Task List"
        className="task-list"
        style={{ backgroundColor: "#68B3F9"}}
      >
        {newList.map((item: any, index: number) => (
          <Button block
            style={{ backgroundColor: "#4788E8" }}
            size="small"
            type="primary"
            onClick={(event) =>listClick(event,index)
            }
          >
            <p>{item.title}:{item.description}</p>
          </Button>
        ))}
      </Card>
      <Card
        title="To-do-List"
        className="to-do-list"
        style={{ backgroundColor: "#FE5757"}}
      >
        {newList.map((item: any, index: number) => (
          <Button block
            style={{ backgroundColor: "#F05252" }}
            size="small"
            type="primary"danger
            // onClick={(event) =>listClick(event,index)}
          >
            {/* <p>{item.title}:{item.description}</p> */}
          </Button>
        ))}
      </Card>
      
    </div>
  );
};

export default ViewList;
