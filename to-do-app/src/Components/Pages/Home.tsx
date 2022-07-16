import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../Style/App.css";
import { Button, Form, Input } from "antd";

const Home = () => {
  const [viewList, setViewList] = useState<any>([]);

  const history = useHistory();
  const nextPage = () => {
    history.push({ pathname: "/view-list", state: viewList });
  };
  const onFinish = (values: any) => {
    setViewList([...viewList, values]);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  

  return (
    <div className="App">
      <h1 className="Heading">To-Do-List</h1>
      <p className="Text">Lets Organize Your Day-To-Day Tasks</p>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className="InputTxt">Enter your To-Do</p>
        <Form.Item
          name="title"
          className="TitleBox"
          rules={[
            { required: true, message: "Please enter title for the task!" },
          ]}
        >
          <Input
            placeholder="Enter task title"
            size="large"
            className="TitleBox"
          />
        </Form.Item>
        <br />

        <p className="InputTxt">Enter the task description</p>
        <Form.Item
          name="description"
          className="DesBox"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea 
          showCount 
          maxLength={100}
          placeholder="Enter task description" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="Button1">
            Add to task list
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" className="Button2" onClick={nextPage}>
            View task list
          </Button>
        </Form.Item>
        <Form.Item>
        <Button htmlType="reset" type="primary" className="Button3">
          Reset
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
