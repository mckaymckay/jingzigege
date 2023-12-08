import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Image, Space, AutoComplete } from 'antd';

const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export const imageLists = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    from: '自采',
    createOa: '李云霞1',
    createDate: '2023-08-31 12：03'
  },
  {
    url: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    from: '自采',
    createOa: '李云霞2',
    createDate: '2023-08-31 12：03'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    from: '自采',
    createOa: '李云霞3',
    createDate: '2023-08-31 12：03'
  },
]


export default function index() {
  return (
    <>
      <Image.PreviewGroup
        preview={{
          toolbarRender: (_, info) => {
            const { current } = info
            return <>
              <span>{`上传来源：${imageLists[current]?.from} 上传人：${imageLists[current]?.createOa} 上传时间：${imageLists[current]?.createDate}`}</span>
            </>
          }
        }}
      >
        {
          imageLists?.length && imageLists?.map((img: any, index: number) => {
            return <>
              <div
              >
                <Image
                  width={80}
                  height={80}
                  src={img?.url}
                />
              </div>
            </>
          })
        }
      </Image.PreviewGroup>
    </>
  )
}
