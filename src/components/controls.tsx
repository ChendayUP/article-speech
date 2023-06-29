import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Select } from 'antd';


interface controlProps {
  voice: string;
  voiceOptions: [{ name: string, label: string }];
  onSubmit: (values: any) => void;
}

const Controls: React.FC<controlProps> = ({ voice, voiceOptions, onSubmit}) => {
  const [form] = Form.useForm();
  const [rate, setRate] = React.useState<string>('1');
  const [pitch, setPitch] = React.useState<string>('1');
  const [selectVoice, setSelectVoice] = React.useState<string>(voice);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    onSubmit && onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Voice"
        name="voice"
        initialValue={selectVoice}
      >
        <Select
          defaultValue={selectVoice}
          onChange={(value)=> {setSelectVoice(value)}}
          options={voiceOptions}
        />
      </Form.Item>
      <Row>
        <Col span={12}>
          <Form.Item
            label="Rate"
            name="rate"
            className='mr-4'
            initialValue={rate}
          >
            <Select
              defaultValue={rate}
              onChange={(value)=> {setRate(value)}}
              options={[
                { value: '0.5', label: '0.5' },
                { value: '0.8', label: '0.8' },
                { value: '1', label: '1' },
                { value: '1.2', label: '1.2' },
                { value: '1.5', label: '1.5' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Pitch"
            name="pitch"
            initialValue={pitch}
          >
            <Select
              defaultValue={pitch}
              onChange={(value)=> {setPitch(value)}}
              options={[
                { value: '0.5', label: '0.5' },
                { value: '0.8', label: '0.8' },
                { value: '1', label: '1' },
                { value: '1.2', label: '1.2' },
                { value: '1.5', label: '1.5' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item >
        <Button htmlType="submit" className='mr-4'>
          Talk to me
        </Button>
        <Button htmlType="button" className='mr-4' onClick={() => window.speechSynthesis.pause()}>
          Pause
        </Button>
        <Button htmlType="button" className='mr-4' onClick={() => window.speechSynthesis.resume()}>
          Resume
        </Button>
        <Button htmlType="button" className='mr-4' onClick={() => window.speechSynthesis.cancel()}>
          Stop
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Controls;