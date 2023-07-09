## display: flex

### flex-direction: 정렬 축 정하기

- `row`: 가로로 정렬 (기본값)
- `column`: 세로로 정렬
- `row-reverse`: 가로로 반대로 정렬
- `column-reverse`: 세로로 반대로 정렬

### flex-wrap: 줄 바꿈

- `nowrap`: 줄 바꿈 없음 (기본값)
- `wrap`: 자동으로 줄 바꿈
- `wrap-reverse`: 아래를 기준으로 줄 바꿈

### justify-content: 수평 정렬

center: 가운데를 기준으로 좌우 대칭 분리
space-between: 양 끝을 기준으로 대칭 분리
space-around: 각 항목을 동일한 간격으로 분리하여 배치합니다.

**참고**: `row`이냐 `column`이냐에 따라 표현이 다르게 보일 수 있다.

### align-items: 수직 정렬

flex-start: 컨테이너의 시작 부분을 기준으로 정렬합니다.
flex-end: 컨테이너의 끝 부분을 기준으로 정렬합니다.
center: 컨테이너의 가운데를 기준으로 정렬합니다.
baseline: 항목들의 텍스트 기준선을 맞추어 정렬합니다.
stretch: 컨테이너의 높이에 맞추어 항목들을 늘려서 정렬합니다.

### flex: <grow(팽창 지수)> <shrink(수축 지수)> <basis(기본 크기)>

- `grow`: 각 박스의 비율 지정 (1:1:2이면 25:25:50의 비율을 가진다)
- `shrink`: `grow`의 반대
- `basis`: 기본 크기
