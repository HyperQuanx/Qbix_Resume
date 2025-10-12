import "./App.css";

function App() {
  return (
    <>
      <div className="resume-container">
        <div className="left-section">
          <div className="profile-section">
            <div className="profile-image">{/* 프로필 이미지 영역 */}</div>
          </div>

          <div className="info-section">
            <h3>기본사항</h3>
            <p className="subtitle">About Me</p>
          </div>

          <div className="info-section">
            <h3>학력사항</h3>
            <p className="subtitle">Academic Background</p>
          </div>

          <div className="info-section">
            <h3>보유자격증/면허증</h3>
            <p className="subtitle">License</p>
          </div>

          <div className="info-section">
            <h3>교육이수</h3>
            <p className="subtitle">Education</p>
          </div>

          <div className="info-section">
            <h3>경력사항</h3>
            <p className="subtitle">Experience</p>
          </div>

          <div className="info-section">
            <h3>보유기술</h3>
            <p className="subtitle">Skills</p>
          </div>
        </div>

        <div className="right-section">
          <div className="header-text">
            <p className="small-text">새로운 아이디어를 창출하고</p>
            <p className="small-text">
              기존 문제를 혁신적으로 해결하는 열정을 가진 개발자
            </p>
            <h1 className="name">한덕용 입니다!</h1>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">👤</span>
              <span>1999.06.03 (만 26세)</span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>010-8904-4623 | qbixroqkfwk@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>서울특별시 강북구 삼양로 124길 7-12</span>
            </div>
          </div>

          <div className="content-section">
            <div className="section-item">
              <div className="section-header">
                <h3>학점은행제 (건국사이버평생교육원)</h3>
                <span className="date">2024.08 ~</span>
              </div>
              <div className="section-detail">
                <span>컴퓨터공학 전공</span>
              </div>
            </div>

            <div className="section-item">
              <div className="section-header">
                <h3>서울용문고등학교</h3>
                <span className="date">2018.02</span>
              </div>
              <div className="section-detail">
                <span>이과</span>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="license-item">
              <span>네트워크 관리사 2급</span>
              <span className="date">2025.07</span>
            </div>
            <div className="license-item">
              <span>PCCE</span>
              <span className="date">2024.12</span>
            </div>
            <div className="license-item">
              <span>운전면허증</span>
              <span className="date">2023.08</span>
            </div>
          </div>

          <div className="content-section">
            <div className="experience-item">
              <div className="section-header">
                <h3>에듀테크 Java 풀스택 개발자 과정 7기</h3>
                <span className="date">2024.07~2025.01 | 6개월</span>
              </div>
              <div className="section-detail">
                <span>
                  Java 기반 풀스택 개발 과정에서 웹 기초, Java, JSP, Spring
                  Boot, Vue, MariaDB 활용 실무 프로젝트 경험 완료
                </span>
              </div>
            </div>

            <div className="experience-item">
              <div className="section-header">
                <h3>항해 99 프론트엔드 과정 17기</h3>
                <span className="date">2023.10~2024.01 | 3개월</span>
              </div>
              <div className="section-detail">
                <span>
                  Frontend 기술(HTML, CSS, JavaScript, React, TypeScript)을
                  학습하고, 6주간의 최종 프로젝트를 통해 실무 경험과 실제 서비스
                  운영 경험
                </span>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="experience-item">
              <div className="section-header">
                <h3>(주)서울맥도날드</h3>
                <span className="date">2019.01 ~ | 4년 7개월</span>
              </div>
              <div className="section-detail">
                <span>
                  Service, Grill & Counter, Cleaning 등 전반적인 업무 경험
                </span>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="skill-item"></div>
          </div>
        </div>
      </div>

      {/* 두 번째 페이지 - 필요시 자동 생성 */}
    </>
  );
}

export default App;
