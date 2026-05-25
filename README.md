# Study Project

Flask 기반의 웹 애플리케이션입니다.

## 프로젝트 구조

```
study/
├── app.py                  # Flask 애플리케이션 메인 파일
├── requirements.txt        # Python 의존성
├── study.ipynb            # Jupyter 노트북
├── gpt/                   # GPT 관련 모듈 (개발 중)
├── static/                # 정적 파일
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── template/              # HTML 템플릿
    └── index.html
```

## 설치 및 실행

### 필수 요구사항
- Python 3.7 이상
- pip

### 설치

```bash
# 의존성 설치
pip install -r requirements.txt
```

### 실행

```bash
python app.py
```

애플리케이션은 `http://localhost:2000`에서 실행됩니다.

## 기능

- Flask 기반 웹 서버
- 정적 파일 지원 (CSS, JavaScript)
- HTML 템플릿 렌더링

## 개발 중인 기능

- GPT 관련 기능 (gpt/ 디렉토리)

---

**마지막 수정**: 2026년 5월 25일
