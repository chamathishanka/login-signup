import React from 'react';
import "./App.css";
import { Form, Input, Button, Checkbox } from 'antd';


const App = () => (
  <div className="App">
    <header className="App-header">
      <Form
        name="aaaa"
        layout="vertical"
      >
        <h2>Sign In</h2>
        <Form.Item label="Username" name="username" >
          <Input placeholder='Username' required>
          </Input>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password placeholder='Password' required></Input.Password>
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me </Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button block type='primary' htmlType='Submit'>Log In</Button>
        </Form.Item>

      </Form>
    </header>
  </div>
);

export default App;