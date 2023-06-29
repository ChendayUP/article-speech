import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Select} from 'antd';


const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Controls: React.FC = (props) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Row>
      <Col span={8}>
        <Form.Item
          label="Voices"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            defaultValue={props.voice}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Rate"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="Pitch" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Row>

  </Form>
);

export default Controls;