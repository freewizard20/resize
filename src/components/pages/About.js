import React from "react";

function About() {
  return <div className="card middle static">
    <h1>About the app</h1>
    <p className="static-content">이 웹앱은 모바일 및 데스크톱에 최적화되어 이미지 크기를 재조정할 수 있는 앱 입니다. 이미지 파일로는 png, jpg, jpeg, bmp, raw가 가능하며, 크기는 줄일 수도 있고, 늘릴 수도 있습니다. Javascript canvas 기능을 활용하여 구현되어서 96dpi로 출력합니다.
    </p><p className="static-content">빠르고 직관적인 UX/UI를 구현하는 것을 목표로 앱을 만들었습니다. 불편한 부분이 있으시면 fw@fweasy.com 으로 메일 부탁드립니다! </p>
    <p className="static-content"> 개발자 연락처 : fw@fweasy.com </p>
  </div >;
}

export default About;
