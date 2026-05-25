# AI와 인터넷 수업 자료 프로젝트

**인터넷 인프라부터 AI까지 배우는 5단계 수업 플랫폼**

> 인터넷 인프라 → ChatGPT 작동 원리 → VSCode 주피터 노트북 계산기 → 로컬 AI → 바이브코딩 챗봇 만들기

---

## 📋 프로젝트 개요

이 프로젝트는 웹 기반 교육 플랫폼으로, Flask를 사용하여 "AI와 인터넷 이해하기" 수업 자료를 제공합니다.

### 주요 학습 내용

- **Class 1: 인터넷 인프라 이해하기** 
  - 인터넷 네트워크의 기초 개념
  - 유튜브 시청 시나리오로 배우는 데이터 흐름
  - 라우터, ISP, DNS 등 인터넷 인프라 핵심 요소
  - 대화형 네트워크 애니메이션

- **Python 기초 학습 (Jupyter 노트북)**
  - print 함수로 출력하기
  - 기본 사칙연산
  - 변수 선언 및 사용
  - input 함수로 사용자 입력 받기
  - 간단한 계산기 앱 만들기
  - 조건문을 활용한 고급 계산기 (사칙연산)

---

## 📁 프로젝트 구조

```
study/
├── app.py                     # Flask 애플리케이션 메인 파일
├── requirements.txt           # Python 의존성
├── README.md                  # 이 문서
├── study.ipynb               # Python 기초 학습 노트북
├── gpt/                      # GPT 관련 모듈 (향후 개발)
├── static/                   # 정적 파일
│   ├── css/
│   │   └── style.css        # 웹 페이지 스타일링
│   └── js/
│       └── main.js          # 웹 페이지 상호작용
└── template/                 # HTML 템플릿
    └── index.html           # 수업 자료 메인 페이지
```

---

## 🚀 설치 및 실행

### 필수 요구사항
- Python 3.7 이상
- pip

### 설치 단계

```bash
# 1. 저장소 클론 (이미 클론된 경우 생략)
git clone https://github.com/SCOTT0318/study.git
cd study

# 2. 의존성 설치
pip install -r requirements.txt
```

### 웹 서버 실행

```bash
python app.py
```

웹 브라우저에서 `http://localhost:2000`에 접속하면 수업 자료를 볼 수 있습니다.

### Jupyter 노트북 실행

```bash
jupyter notebook study.ipynb
```

또는 VS Code에서 직접 열어 셀 단위로 실행할 수 있습니다.

---

## 📚 학습 자료 사용 방법

1. **웹 페이지로 학습**: `http://localhost:2000`에서 "인터넷 인프라" 개념을 시각적으로 학습
2. **Jupyter 노트북으로 실습**: `study.ipynb`에서 Python 코드를 직접 입력하고 실행하며 배움
3. **단계별 학습**: 각 단계를 완료한 후 다음 단계로 진행

---

## 🛠 기술 스택

- **Backend**: Flask 3.0+
- **Frontend**: HTML5, CSS3, JavaScript
- **Learning Tools**: Jupyter Notebook, Python 3
- **Port**: 2000

---

## 📝 노트북 학습 단계

### 1단계: 기본 출력
- `print()` 함수로 텍스트 출력하기
- Hello, World! 프로그램

### 2단계: 산술연산
- 기본 계산 (3+4)
- 문자열과 숫자 함께 출력

### 3단계: 변수 사용
- 변수 선언 및 할당
- 변수를 이용한 계산

### 4단계: 사용자 입력
- `input()` 함수 사용
- 사용자 입력받아 출력하기

### 5단계: 계산기 앱
- 두 수를 입력받아 곱셈
- 조건문 활용한 사칙연산 계산기

---

## 🔄 향후 개발 계획

- [ ] ChatGPT 작동 원리 설명
- [ ] 로컬 AI 모델 통합
- [ ] 바이브코딩 챗봇 제작 가이드
- [ ] 대화형 실습 환경 구축

---

**마지막 수정**: 2026년 5월 25일
