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
              <span className="icon">🏠</span>
              <span>서울특별시 강북구 삼양로 124길 7-12</span>
            </div>
          </div>

          <div className="content-section">
            <div className="section-item">
              <div className="section-header">
                <h3>학점은행제 (건국사이버평생교육원)</h3>
                <span className="date">2024.08~</span>
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
                <span className="date">2019.01~ | 4년 7개월</span>
              </div>
              <div className="section-detail">
                <span>
                  Service, Grill & Counter, Cleaning 등 전반적인 업무 경험
                </span>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="skill-item">
              <div className="skill-header">
                <h3>FrontEnd</h3>
              </div>
              <div className="skill-detail">
                <span>HTML, CSS, JavaScript, TypeScript, React</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <h3>BackEnd</h3>
              </div>
              <div className="skill-detail">
                <span>Java, Spring Boot, JSP, Thymeleaf, MariaDB, FastAPI</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <h3>ETC</h3>
              </div>
              <div className="skill-detail">
                <span>Git, GitHub, AWS, Slack, Notion, Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 1 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">온라인 학업성취도 평가</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2024.12.16 ~ 2025.01.09</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>FullStack : 한덕용, 강경민, 이원희, 조수진, 최사랑</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>학생의 학업 수준 진단을 위한 서비스입니다.</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>
                  전체적인 매니지먼트 담당(팀장, Github)을 맡아 팀원 관리,
                  프로젝트 진행 방향 결정, 프로젝트 관리 등을 담당하였습니다.
                </li>
                <li>
                  전체적인 UI Layout을 구현하였고 디자인 파일을 Publishing하는
                  작업을 진행하였습니다.
                </li>
                <li>나의 리포트 FrontEnd 작업을 맡아 구현했습니다.</li>
                <li>
                  GPT API와 FastAPI를 활용해 학생 성적을 AI로 분석하는 기능을
                  구현했습니다.
                </li>
                <li>
                  Jenkins를 활용해 CI(지속적 통합)를 성공적으로 구축했습니다.
                </li>
                <li>Github를 총괄하여 프로젝트를 진행하였습니다.</li>
                <li>발표 및 시연을 진행하였습니다.</li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">JavaScript</span>
                <span className="project-item-skill">Thymeleaf</span>
                <span className="project-item-skill">SpringBoot</span>
                <span className="project-item-skill">FastAPI</span>
                <span className="project-item-skill">MyBatis/JPA</span>
                <span className="project-item-skill">MySQL</span>
                <span className="project-item-skill">Jenkins</span>
                <span className="project-item-skill">AWS</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                풀스택으로 참여한 가장 큰 프로젝트였고 실제 서비스 중인 두
                플랫폼을(성취도 평가, 문제은행) 하나의 프로젝트로 녹여내는
                작업을 하다 보니 실제 연업에서 근무하는듯한 경험을 얻었습니다.
                <br />
                부트캠프에서 배운 기술에만 의존하지 않고 새로운 시도(FastAPI,
                Jenkins, AWS)를 해보았고 이를 통해 프로젝트의 가치를 높이는데 큰
                도움이 되었습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a href="#">
                GitHub : <s>사측 디자인 파일 사용으로 비공개</s>
              </a>
              <a href="#">
                URL : <s>배포 중단 (AWS 만료)</s>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 2 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">Nine Cloud</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2023.11.30 ~ 2024.01.10</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                FrontEnd : 한덕용, 주철민, 송지우 / BackEnd : 유재현, 이찬영 /
                Design : 이승연
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                여유가 부족해 감정 정리에 어려움을 겪는 사람들을 위해 감정일기
                제작
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>FrontEnd로 참여했습니다.</li>
                <li>Onboarding와 Sign In/Up을 구현하였습니다.</li>
                <li>OAuth2.0을 이용한 소셜 로그인을 구현하였습니다.</li>
                <li>Socket.io를 이용한 실시간 채팅 기능을 구현하였습니다.</li>
                <li>
                  Axios Interceptor를 활용해 Access/Refresh Token을 관리하여
                  자동 로그인 및 토큰 재발급 기능을 구현하였습니다.
                </li>
                <li>
                  Kakao Share API를 활용해 카카오톡 공유 기능을 구현하였습니다.
                </li>
                <li>발표 및 시연과 발표 영상을 제작하였습니다.</li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">React</span>
                <span className="project-item-skill">TypeScript</span>
                <span className="project-item-skill">OAuth2.0</span>
                <span className="project-item-skill">Axios</span>
                <span className="project-item-skill">React-Query</span>
                <span className="project-item-skill">React-Router</span>
                <span className="project-item-skill">Styled-components</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                서비스 운영 6일 동안 146명의 사용자가 가입하였으며, 총 648개의
                게시물이 등록되었습니다. 사용자 만족도는 약 70%를 기록하였고,
                항해99에서 ‘최고의 인기 프로젝트상’을 수상하였습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a
                href="https://github.com/final-project-hh99/front.git"
                target="_blank"
              >
                GitHub : https://github.com/final-project-hh99/front.git
              </a>
              <a href="https://nine-cloud9.vercel.app/" target="_blank">
                URL : https://nine-cloud9.vercel.app/
              </a>
              <a
                href="https://youtu.be/H19d_RmrYqU?si=eihwqoEMaNA1MKB6"
                target="_blank"
              >
                YouTube : https://youtu.be/H19d_RmrYqU?si=eihwqoEMaNA1MKB6
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 3 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">한덕용_Portfolio</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2025.02.28 ~ 2025.03.22 / 2025.09 ~</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>FullStack : 한덕용</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>제 포트폴리오입니다.</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>
                  기상청 초단기예보 API 연동으로 오늘의 날씨를 구현하였습니다.
                </li>
                <li>
                  단독으로 기획부터 디자인, 프론트엔드·백엔드 개발 및
                  데이터베이스 구축까지 전 과정을 수행한 첫 프로젝트를
                  수행하였습니다.
                </li>
                <li>
                  Cyworld 방명록 디자인을 참고하여 Feedback 기능을
                  구현하였습니다.
                </li>
                <li>Frontend는 Vercel, Backend는 AWS EC2로 배포하였습니다.</li>
                <li>
                  Github Actions를 활용하여 CI/CD 파이프라인을 구축하였습니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">React</span>
                <span className="project-item-skill">Axios</span>
                <span className="project-item-skill">React-Router</span>
                <span className="project-item-skill">Styled-Components</span>
                <span className="project-item-skill">SpringBoot</span>
                <span className="project-item-skill">JPA</span>
                <span className="project-item-skill">MySQL</span>
                <span className="project-item-skill">AWS</span>
                <span className="project-item-skill">Github Actions</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                이번 프로젝트는 제 첫 풀스택 프로젝트인 만큼 큰 애정을 가지고
                작업에 임했습니다. 다양한 기능을 추가하고 여러 요소를 더욱
                풍부하게 만들고 싶은 욕심이 컸지만 포트폴리오라는 본분을 잊지
                않으려 노력했습니다. 그 과정에서 기능의 양과 질 사이에서
                조율하는 것이 쉽지 않았지만 프로젝트의 핵심 가치에 집중하며
                최선을 다했습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a
                href="https://github.com/HyperQuanx/React_QbixPortfolio"
                target="_blank"
              >
                GitHub : https://github.com/HyperQuanx/React_QbixPortfolio
              </a>
              <a href="https://react-qbix-portfolio.vercel.app" target="_blank">
                URL : https://react-qbix-portfolio.vercel.app
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 4 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">StudyWithChunjae(SWC)</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2024.12.05 ~ 2024.12.13</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>FullStack : 한덕용, 강감찬, 조수진, 한인규</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                학습 관리와 공유를 한 곳에서 쉽게 할 수 있는 서비스입니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>
                  Sign In/Up(BCrypt 암호화, JWT 관리, OAuth2.0, Security 인증
                  처리, 임시 비밀번호 관리 등)을 구현하였습니다.
                </li>
                <li>웹 디자인을 맡았고 템플릿을 고도화하였습니다.</li>
                <li>
                  마이페이지에서 기본 회원 관리와 유저 정보 실시간 변경 기능을
                  구현하였습니다.
                </li>
                <li>Github를 총괄하여 프로젝트를 진행하였습니다.</li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">JavaScript</span>
                <span className="project-item-skill">Thymeleaf</span>
                <span className="project-item-skill">SpringBoot</span>
                <span className="project-item-skill">SpringSecurity</span>
                <span className="project-item-skill">OAuth2.0</span>
                <span className="project-item-skill">MyBatis/JPA</span>
                <span className="project-item-skill">MySQL</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                이번 프로젝트에서도 전 프로젝트와 마찬가지로 로그인 프로세스를
                더욱 고도화하고 싶은 욕심이 커 다시 한번 회원 관련 부분을 맡게
                되었습니다. 이번에는 기존의 로그인 시스템을 개선하고 보다
                안전하고 사용자 친화적인 기능을 추가하기 위해 노력했습니다.
                특히, 보안 강화와 사용자 경험 개선에 중점을 두어 작업을
                진행하였습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a
                href="https://github.com/study-with-chunjae/swc"
                target="_blank"
              >
                GitHub : https://github.com/study-with-chunjae/swc
              </a>
              <a href="#">
                URL : <s>배포 중단 (AWS 만료)</s>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 5 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">Inflearn Clone Coding</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2024.11.25 ~ 2024.12.01</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>FullStack : 한덕용, 송수미, 조수진, 한인규</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>인프런 디자인을 클론 코딩한 서비스입니다.</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>인프런 디자인의 Layout과 Common UI를 구현하였습니다.</li>
                <li>
                  BCrypt 알고리즘을 이용하여 사용자 정보를 암호화하여 저장하고
                  JWT를 활용하여 토큰 발급 및 검증 기능을 구현하였습니다.
                </li>
                <li>정렬 기능과 Stream을 이용한 페이징을 구현하였습니다.</li>
                <li>
                  비동기 통신을 이용하여 실시간 내 정보 수정 기능을
                  구현하였습니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">JavaScript</span>
                <span className="project-item-skill">Thymeleaf</span>
                <span className="project-item-skill">SpringBoot</span>
                <span className="project-item-skill">SpringSecurity</span>
                <span className="project-item-skill">MyBatis/JPA</span>
                <span className="project-item-skill">MySQL</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                이번 프로젝트에서는 로그인 백엔드 로직을 집중적으로
                구현했습니다. 로그인과 로그아웃은 모든 서비스의 시작점이자 가장
                기본적이면서도 복잡한 작업이 이루어지는 부분이라고 생각했습니다.
                따라서 이를 더욱 견고하고 효율적으로 구현하기 위해 많은 노력을
                기울였습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a
                href="https://github.com/In-gyu-and-the-Elders/InflearnCloneCoding"
                target="_blank"
              >
                GitHub :
                https://github.com/In-gyu-and-the-Elders/InflearnCloneCoding
              </a>
              <a href="#">
                URL : <s>배포 중단 (AWS 만료)</s>
              </a>
              <a
                href="https://youtube.com/playlist?list=PLYe4oMarWXxgJqd85W7dlbtjXIn3U_hjR&si=XNRMcqUcFVj-85Xk"
                target="_blank"
              >
                YouTube :
                https://youtube.com/playlist?list=PLYe4oMarWXxgJqd85W7dlbtjXIn3U_hjR&si=XNRMcqUcFVj-85Xk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 6 */}
      <div className="resume-container">
        <div className="left-section">
          <div className="project-info-section">
            <h3>프로젝트명</h3>
            <p className="subtitle">Project Name</p>
          </div>

          <div className="project-info-section">
            <h3>작업기간</h3>
            <p className="subtitle">Duration</p>
          </div>

          <div className="project-info-section">
            <h3>인력구성</h3>
            <p className="subtitle">Team Composition</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 목적</h3>
            <p className="subtitle">Project Goal</p>
          </div>

          <div className="project-info-section">
            <h3>주요 업무 및 상세역할</h3>
            <p className="subtitle">Key Responsibilities</p>
          </div>

          <div className="project-info-section">
            <h3>사용 기술 스택</h3>
            <p className="subtitle">Tech Stack</p>
          </div>

          <div className="project-info-section">
            <h3>프로젝트 결과</h3>
            <p className="subtitle">Result</p>
          </div>

          <div className="project-info-section">
            <h3>참고자료</h3>
            <p className="subtitle">References</p>
          </div>
        </div>

        <div className="right-section">
          <div className="project-content-section">
            <div className="project-item">
              <span className="project-title">NanuSam</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>2024.11.11 ~ 2024.11.18</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>FullStack : 한덕용, 강감찬, 공미경, 이원희, 조수진</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>선생님들을 위한 중고거래 서비스입니다.</span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <ul className="project-item-list">
                <li>Layout과 Common UI를 구현하였습니다.</li>
                <li>
                  Admin 기능 회원 관리, 공지, 상품 관리 CRUD를 구현/Filter를
                  적용하였습니다.
                </li>
                <li>
                  IntersectionObserver를 활용하여 메인화면 무한스크롤을
                  구현하였습니다.
                </li>
                <li>Github를 총괄하여 프로젝트를 진행하였습니다.</li>
              </ul>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <div className="project-item-skill-container">
                <span className="project-item-skill">React</span>
                <span className="project-item-skill">TypeScript</span>
                <span className="project-item-skill">OAuth2.0</span>
                <span className="project-item-skill">Axios</span>
                <span className="project-item-skill">React-Query</span>
                <span className="project-item-skill">React-Router</span>
                <span className="project-item-skill">Styled-components</span>
              </div>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <span>
                제 첫 풀스택 프로젝트입니다. JSP와 Spring을 활용한 첫
                프로젝트였고 팀원들이 프론트엔드 기술에 익숙하지 않아 주로
                프론트엔드 부분을 맡아 작업하였습니다.
              </span>
            </div>
          </div>

          <div className="project-content-section">
            <div className="project-item">
              <a
                href="https://github.com/ChunjaeKerningCity/nanusam"
                target="_blank"
              >
                GitHub : https://github.com/ChunjaeKerningCity/nanusam
              </a>
              <a href="#">
                URL : <s>배포 중단 (AWS 만료)</s>
              </a>
              <a
                href="https://youtu.be/o7T6dUfTBhI?si=PxsbFWe614BRBF5P"
                target="_blank"
              >
                YouTube : https://youtu.be/o7T6dUfTBhI?si=PxsbFWe614BRBF5P
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
