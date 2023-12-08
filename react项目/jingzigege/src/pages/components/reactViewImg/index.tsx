import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { imageLists } from '../upgradeAntd'
import styles from './index.less'
import { CloseCircleOutlined, CloudDownloadOutlined, CheckOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <PhotoProvider
      toolbarRender={(info) => {
        const { index: current } = info
        return (
          <>
            <div className={styles.preview_img_text}>{`上传来源：${imageLists[current]?.from}\u00A0\u00A0\u00A0 上传人：${imageLists[current]?.createOa}\u00A0\u00A0\u00A0上传时间：${imageLists[current]?.createDate}`}</div>
          </>
        );
      }}
    >
      <div className="foo">
        {imageLists.map((item, index) => (
          <>
            <div
              className={styles.img_cell}
              key={index}
              onMouseEnter={() => console.log(1)}
              onMouseLeave={() => console.log(2)}
            >
              <PhotoView key={index} src={item.url} >
                <img style={{ width: '80px', height: '80px' }} src={item?.url} alt="" />
              </PhotoView>
              <>
                <CloudDownloadOutlined className={styles.download_icon} onClick={() => console.log(4)} />
                <CloseCircleOutlined className={styles.del_icon} onClick={() => console.log(5)} />
              </>
              <div className={styles.mark_icon} onClick={() => console.log(3)}>
              </div>
            </div>
          </>
        ))}
      </div>

    </PhotoProvider>
  );
}
