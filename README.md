# Robos Easy LeRobot

Robos Easy 브랜드의 공식 커뮤니티 사이트입니다. 함께 만들고 바로 따라할 수 있는 AI 프로젝트 플랫폼을 제공합니다.

## 🚀 프로젝트 개요

- **브랜드**: Robos Easy
- **슬로건**: "모두를 위한 Physical AI"
- **URL**: https://roboseasy.github.io/
- **YouTube**: [@roboseasy](https://youtube.com/@roboseasy)
- **GitHub**: [roboseasy]()

## 📁 프로젝트 구조

```
roboseasy/
├── docs/                        
│   └── 문서/가이드 파일들
├── favicon/                    
│   └── 파비콘/아이콘 이미지 파일들
├── public/                      # 정적 파일 (웹에서 직접 접근 가능)
│   └── images/
│       ├── events/
│       │   └── 이벤트 용 이미지들 
│       ├── blogs/
│       │   └── 블로그 용 이미지들
│       └── lerobot/
│           └── 로봇들 문서 용 이미지들 
├── src/                         # 소스 코드
│   ├── components/              # 재사용 컴포넌트
│   │   ├── Callout.astro       # 콜아웃 컴포넌트
│   │   └── Tabs.astro          # 탭 컴포넌트
│   │
│   ├── layouts/                 # 레이아웃 컴포넌트
│   │   ├── Layout.astro        # 기본 페이지 레이아웃
│   │   └── DocsLayout.astro    # 문서 전용 레이아웃
│   │
│   ├── pages/                   # 페이지 라우팅
│   │   ├── index.astro         # 홈페이지
│   │   ├── docs/
│   │   │   ├── index.astro     # 문서 메인
│   │   │   └── [...slug].astro # 동적 문서 라우팅
│   │   ├── events/
│   │   │   └── index.astro     # 이벤트 페이지
│   │   └── - 구성원
│   │       └── index.astro     # 팀 소개
│   │
│   ├── content/                 # MDX 콘텐츠
│   │   ├── config.ts           # 콘텐츠 설정
│   │   └── docs/
│   │       ├── index.mdx
│   │       └── physical-ai/
│   │           ├── overview.mdx
│   │           └── lerobot/    # LeRobot 튜토리얼
│   │               ├── index.mdx
│   │               ├── intro.mdx
│   │               ├── getting-started.mdx
│   │               ├── hardware.mdx
│   │               ├── hardware/
│   │               │   ├── koch.mdx
│   │               │   └── so-101.mdx
│   │               ├── software/
│   │               │   ├── installation.mdx
│   │               │   ├── teleoperation.mdx
│   │               │   ├── data-collection.mdx
│   │               │   └── training.mdx
│   │               ├── tutorials/
│   │               │   └── imitation-learning.mdx
│   │               └── policy/
│   │                   ├── act.mdx
│   │                   └── smolvla.mdx
│   │
│   └── styles/                  # 스타일 파일
│       ├── global.css          # 전역 스타일
│       └── custom.css          # 커스텀 스타일
│
├── .gitignore                   # Git 무시 파일
├── astro.config.mjs            # Astro 설정
├── LICENSE                     # 라이센스
├── package.json                # 프로젝트 의존성
├── package-lock.json           # 의존성 잠금 파일
├── README.md                   # 프로젝트 설명서
└── tsconfig.json               # TypeScript 설정

```

## 🎨 주요 기능

### 구현 완료 ✅
- 다크 테마 기반 UI/UX
- 반응형 디자인
- MDX 기반 문서 시스템
- YouTube 콘텐츠 임베드 (팟캐스트, 미니 다큐)
- GitHub Discussions 연동 게시판
- 행사 갤러리 페이지
- 구성원 페이지
- GitHub Pages 배포

### 개발 예정 📋
- Physical AI 튜토리얼 콘텐츠 확충
- GitHub Actions 자동화
- 외부 채널 알림 (Slack, Discord, 카카오톡)

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

[Node.js 설치](https://nodejs.org/ko/download)

```bash
# v18 이상인지 확인
node -v
```

```bash
# 의존성 설치
npm install

npm install swiper photoswipe

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🎨 브랜드 색상

- Primary: `#a259ff` (Neon Purple)
- Secondary: `#5fadfe` (Neon Blue)
- Background: `#0a0a0a` (Near Black)
- Accent Colors:
  - `#43d6a8` (Greenish Neon)
  - `#c21829` (Red Neon)
  - `#fde471` (Yellow Neon)
  - `#fefca8` (Light Yellow Neon)

## 📝 콘텐츠 작성 가이드

### MDX 문서 추가
1. `src/content/docs/` 디렉토리에 `.mdx` 파일 생성
2. Frontmatter에 제목과 설명 추가
3. MDX 문법으로 콘텐츠 작성

### 행사 정보 추가
1. `src/pages/archive/index.astro` 파일 수정
2. 행사 데이터 배열에 새 항목 추가
3. 행사 이미지는 `public/images/events/`에 저장

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.



