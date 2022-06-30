import "./BottomMenu.css";
import { Link } from "react-router-dom";

export default function BottomMenu() {
  return (
    <div className="bottom-menu">
      <div className="menu-box">
        <div className="main-menu">
          <Link to="/">COFFEE</Link>
          <div className="menu2">
            <div className="sub">
              <ul className="content">
                <li className="categoryTitle">커피</li>
                <li>스타벅스 원두</li>
                <li>스타벅스 비아</li>
                <li>스타벅스앳홈 by 캡슐</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">나와 어울리는 커피</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">스타벅스 리저브™</li>
                <li>RESERVE MAGAZINE</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">에스프레소 음료</li>
                <li>도피오</li>
                <li>에스프레소 마키아또</li>
                <li>아메리카노</li>
                <li>마키아또</li>
                <li>카푸치노</li>
                <li>라떼</li>
                <li>모카</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">최상의 커피를 즐기는 법</li>
                <li>커피 프레스</li>
                <li>푸어 오버</li>
                <li>아이스 푸어 오버</li>
                <li>커피 메이커</li>
                <li>리저브를 매장에서 다양하게 즐기는 법</li>
              </ul>
            </div>
            <div className="sub">
              <ul className="content">
                <li className="categoryTitle">커피 이야기</li>
                <li>농장에서 우리의 손으로</li>
                <li>최상의 아라비카 원두</li>
                <li>스타벅스 로스트 스펙트럼</li>
                <li>스타벅스 디카페인</li>
                <li>클로버® 커피 추출 시스템</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <Link to="/">MENU</Link>
          <div className="menu2">
            <div className="sub">
              <ul className="content">
                <li className="categoryTitle">음료</li>
                <li>콜드 브루</li>
                <li>브루드 커피</li>
                <li>에스프레소</li>
                <li>프라푸치노</li>
                <li>블렌디드</li>
                <li>스타벅스 리프레셔</li>
                <li>스타벅스 피지오</li>
                <li>티(티바나)</li>
                <li>기타 제조 음료</li>
                <li>스타벅스 주스(병음료)</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">푸드</li>
                <li>브레드</li>
                <li>케이크</li>
                <li>샌드위치 &amp; 샐러드</li>
                <li>따뜻한 푸드</li>
                <li>과일 &amp; 요거트</li>
                <li>스낵 &amp; 미니 디저트</li>
                <li>아이스크림</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">상품</li>
                <li>머그</li>
                <li>글라스</li>
                <li>플라스틱 텀블러</li>
                <li>스테인리스 텀블러</li>
                <li>보온병</li>
                <li>액세서리</li>
                <li>선물세트</li>
                <li>커피 용품</li>
                <li>패키지 티(티바나)</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">카드</li>
                <li>실물카드</li>
                <li>e-Gift 카드</li>
              </ul>
              <ul className="content">
                <li className="categoryTitle">메뉴 이야기</li>
                <li>나이트로 콜드브루</li>
                <li>콜드 브루</li>
                <li>스타벅스 티바나</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <Link to="/">STORE</Link>
        </div>
        <div className="main-menu">
          <Link to="/">RESPONSIBILITY</Link>
        </div>
        <div className="main-menu">
          <Link to="/">STARBUCKS REWARDS</Link>
        </div>
        <div className="main-menu">
          <Link to="/">WHAT'S NEW </Link>
        </div>
      </div>
    </div>
  );
}
