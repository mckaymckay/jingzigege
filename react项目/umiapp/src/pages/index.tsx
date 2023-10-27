import React, { useMemo, useState } from "react"
import { createForm } from "@formily/core"
import "antd/dist/antd.css"
import { message, Modal } from "antd"
import { NewMixinParser, Form } from "model-parser" //需按包
import schema from './schemajson.json';

export default function IndexPage() {
  const [listData, setlistData] = useState([1, 2, 3, 4, 5])
  const form = useMemo(() => createForm(), [])
  return (
    <div>
      <Form form={form} {...schema.form}>
        <NewMixinParser
          treeSchema={schema}
          components={{}}
          scope={{ message, Modal }}
        ></NewMixinParser>
      </Form>
    </div>
  );
}
