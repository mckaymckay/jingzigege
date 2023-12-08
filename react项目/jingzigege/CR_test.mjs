import fetch from 'node-fetch';
import fs from 'fs'
import XLSX from 'xlsx';


const arr = ['jiangxiaomeng', 'dingyanqiang', 'baidongying', 'zhangting43', 'wangxiaomeng06', 'weijie03', 'zhaoll01', 'wangye16', 'maxiaolin', 'mayanli', 'liyongsheng03']
const header = 'https://ee.58corp.com/api-yunxiao-cr/workbench/myJoinReviewHistory?userName='
const footer = '& page=1 & pageSize=9'
const newarr = arr.map(v => header + v + footer)
let promises = newarr.map(url => fetch(url))
const titles = ['id', 'title', 'state', 'reviewers', 'author', 'updateTime', 'draftNum', 'changeNum', 'addNum', 'delNum', 'gpName', 'branch', 'reviewerChecks', 'requestType', 'mrState']

// 写入到excel，目前有点问题
function jsonToExcel (data, head, name = '导出的文件名') {
  let str = head ? head + '\n' : '';
  data.forEach(item => {
    // 拼接json数据, 增加 \t 为了不让表格显示科学计数法或者其他格式
    for (let key in item) {
      str = `${str + item[key] + '\t'},`
    }
    str += '\n'
  });
  console.log(str)
  // encodeURIComponent解决中文乱码
  const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download = `${name + '.csv'}`;
  link.click();
}
Promise.all(promises)
  .then(responses => Promise.all(responses.map(response => response.json()))) // 将每个响应转换为JSON
  .then(data => {
    // 扁平，按时间过滤
    const res = data.map(v => v.data.joinReviewHistoryList).flat().filter(i => new Date(i.updateTime) > new Date('2023-07-01 14:47:34'))
    // 去重
    const aa = Array.from(new Set(res.map(JSON.stringify))).map(JSON.parse);
    console.log(18, aa, aa.length)
    // jsonToExcel(aa, titles.join())
    fs.writeFile('output.txt', JSON.stringify(aa), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  })
  .catch(error => {
    // 如果任何接口调用失败，都会进入这个错误处理函数
    console.error('Error:', error);
  });