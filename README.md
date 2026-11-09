<div align="center">

# `~/seulbin`

**Backend Engineer · Java 5th year**

오래 버티는 시스템을, 조용하게 만듭니다.

[![Live](https://img.shields.io/badge/live-seulbinkaylee.github.io-f89820?style=flat-square&logo=githubpages&logoColor=white)](https://seulbinkaylee.github.io)
[![Blog](https://img.shields.io/badge/blog-tistory-000000?style=flat-square&logo=tistory&logoColor=white)](https://seulbinkaylee.tistory.com)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Zero deps](https://img.shields.io/badge/dependencies-0-3fb950?style=flat-square)

</div>

---

## Overview

Java · Spring 백엔드 엔지니어 **구슬빈(Seulbin Kaylee Gu)** 의 개인 사이트입니다.
템플릿을 걷어내고 **프레임워크·번들러·트래커 없이** 순수 HTML/CSS/JS로 다시 작성했습니다.

> 백엔드 개발자의 사이트는 백엔드처럼 — 의존성은 적게, 동작은 예측 가능하게.

## Design Decisions

| 결정 | 이유 |
| --- | --- |
| **No framework, no build step** | 정적 페이지 하나에 빌드 파이프라인은 과잉. `git push` = 배포. |
| **Dark-first + Light 토글** | `prefers-color-scheme` 대신 명시적 토글, `localStorage`로 유지. 저장 실패 시에도 정상 렌더. |
| **Java 오렌지 `#f89820` 단일 포인트 컬러** | 정체성은 색 하나로 충분. 나머지는 중립 톤. |
| **Pretendard + JetBrains Mono** | 한글 가독성과 코드 감성의 분리. |
| **IntersectionObserver 기반 reveal** | 스크롤 이벤트 리스너 없이 가볍게. `prefers-reduced-motion` 존중. |
| **Mobile-first breakpoints (900 / 640)** | 모든 섹션 1열로 자연스럽게 접힘. 가로 스크롤 없음. |

## Structure

```
.
├── index.html          # single page: hero · about · stack · journey · writing · contact
├── assets/
│   ├── style.css       # design tokens(:root) + components + responsive
│   ├── main.js         # theme toggle, reveal-on-scroll
│   ├── favicon.svg
│   └── profile.png
└── .nojekyll           # GitHub Pages가 Jekyll 처리 없이 그대로 서빙
```

## Run Locally

```bash
# 아무 정적 서버나 OK
npx serve .
# or
python -m http.server 8080
```

## Deploy

`main` 브랜치에 push 하면 **GitHub Pages**가 자동으로 배포합니다.

---

<div align="center">
<sub>© Seulbin Kaylee Gu · Built with plain HTML/CSS</sub>
</div>
