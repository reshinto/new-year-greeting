import CardCover from "../CardCover";
import "./styles.css";

function Card() {
  return (
    <div className="container">
      <div className="new-year-card">
        <div className="imgBox">
          <CardCover />
        </div>
        <div className="content">
          <h2>アイウエオへ、</h2>
          <br />
          <p className="new-year-message">
            <span>明けましておめでとうございます！</span>
            <br />
            <span>昨年は大変お世話になりました。</span>
          </p>
          <br />
          <p className="new-year-message">
            <span>かきくけこさしすせそたちつてと。</span>
            <br />
            <span>なにぬねのまみむめもらりるれろ。</span>
            <br />
            <span>はひふへほあえうまみもさたつさ。</span>
          </p>
          <br />
          <p className="new-year-message">
            <span>あああああああああああああああ。</span>
            <br />
            <span>今後ともどうぞよろしくお願いいたします！</span>
          </p>
          <p className="bottom-text">
            <span>令和四年 元旦</span>
            <br />
            <br />
            <span>アア ササササ</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
