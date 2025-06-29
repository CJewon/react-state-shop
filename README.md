# FakeStore

React + Vite를 이용한 개인 공부용 프로젝트

## 목적

1. React 컴포넌트에 대한 이해
2. React 렌더링 및 리렌더링 과정 이해
3. API를 활용한 간단한 CRUD 구현
4. React Router 도입 및 라우팅 이해
5. 상태관리 라이브러리 도입 및 상태 관리 이해
6. React Query 도입으로 데이터 페칭 이해
7. SSR, CSR 도입 및 각각의 이해

## 현재 진행 사항

- React 컴포넌트를 역할별로 분리하여 쇼핑몰 페이지를 제작 중입니다.
- 현재 API 관련 문제로 해당 프로젝트는 중단

## 날짜별 진행 사항

### 2025-05-28

- 리스트 렌더링 기능 구현
- 정렬 기능 구현

### 2025-05-29

- 페이지별 파일 구조 개선
- 공용 레이아웃 HTML/CSS 작업
- 라우팅 기능 추가 완료
- 메인페이지 작업 완료

### 2025-06-02

- 제품 상세페이지 구현중
- 장바구니 담기 기능 추가
- react-toastify 추가
- 장바구니 담기 기능에서 알림이나 UI업데이트 부분에서 느리게 반영되서 해결방안 모색중(redux)

### 2025-06-04

- redux를 활용해 서버와 UI 업데이트에 대한 딜레이를 줄이고자 했지만 실패
- redux보다는 react-query가 더 적합하다는 것을 알고 도입시도
- API 확인결과 로그인 기능이 없어서 userId 인자가 필요로하는 post요청이 불가능
- 추후 로그인기능을 우선적으로 추가할 예정

### 2025-06-06

- 로그인 페이지 및 로그인 기능 추가
- redux를 활용해 로그인 상태관리 추가
- 회원가입 페이지 구현은 했으나 기능은 아직 미구현

### 2025-06-07

- 회원가입 기능 구현
- 그러나 현재 사용하고 있는 API는 테스트용 더미 API이기 때문에 실제 기능이 작동하진 않음

## Page

- 메인페이지 (초안 완성)
- 상품목록페이지 (초안 완성)
- 상품상세페이지
- 상품등록페이지
- 로그인페이지(추후 추가예정)

## Trouble Shooting

### 1. 장바구니 데이터 지연 문제

- 증상 : 장바구니에 아이템 추가 시 알림이나 UI 업데이트가 느리게 반영
- 원인 : 서버 API 요청이 완료된 후에야 상태가 업데이트되어 네트워크 지연 때문에 반응이 늦어짐

---

#### 내가 생각한 해결 방향성

1. redux 라이브러리를 활용해 cart에 담긴 리스트를 전역상태로 관리해주고 이를 바탕으로 ProductListPage, ProductDetailPage에서 유동적으로 활용 할 수 있을 것이라고 생각.

   => 생각과는 달리 ProductListPage, ProductDetailPage 에서의 cart 상태가 동기화가 안된 상태가 되어버림

   => ProductListPage, ProductDetailPage의 cart 상태를 찍어보니 상태가 다른 것을 확인.

   => 서버 상태와 UI 상태 간 데이터 일관성을 유지하기 위해서 redux 보단 react-query가 더 적합하다는 생각이 듦

2. react-query를 활용해 API 함수 수정 및 낙관적 업데이트를 추가해 서버 상태와 UI 상태 간 데이터 일관성을 보장해 문제를 해결하고자 함.
