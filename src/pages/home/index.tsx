import { Button } from "antd-mobile"
import { DocAdd,BookmarkThree } from "@icon-park/react"
import "../../styles/home copy/index.less"
export default function HomePage() {
  return (
    <div className="home">
      <div className="header">
        <div className="header-left">  <BookmarkThree theme="outline" size="24" fill="#333" />  <span>今日账本</span></div>
        <div className="header-right"></div>
      </div>
       <div className="total">
        <div className="earn">
          <span>收入</span>
          <span>0.00</span>
        </div>
        <div className="pay">
          <span>支出</span>
          <span>0.00</span>
        </div>
       </div>
      <Button block size="large" color="primary" className="add">
        <DocAdd theme="outline" size="24" fill="#333" className="modifyIcon" />
        <span>新增一笔</span>
      </Button>
    </div>
  );
}
