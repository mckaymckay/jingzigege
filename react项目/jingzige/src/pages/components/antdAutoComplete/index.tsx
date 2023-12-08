import React, { useState } from "react";
import "antd/dist/antd.css";
import { AutoComplete } from "antd";
import { getOptions } from './demo'


const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);


  const onSelect = (data: string, option: any) => {
    console.log("11", data, option);
    // setValue(data);
  };

  const onChange = async (data: string, option: any) => {
    const res: any = await getOptions(data);
    setOptions(res)
    setValue(option?.label);

  };

  return (
    <>
      <div style={{ marginLeft: '100px' }}>
        <AutoComplete
          allowClear
          value={value}
          style={{ width: 200 }}
          options={options}
          onSelect={onSelect}
          onChange={onChange}
          // filterOption={false}
          placeholder="control mode"
        />
      </div>

    </>
  );
};

export default App;
