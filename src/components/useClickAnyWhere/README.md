# useClickAnyWhere

### - 작동
- 해당 컴포넌트의 영역 어디든 클릭해도 이벤트가 발생함.
- node module을 보니 이벤트 핸들러가 mouseEvent를 사용함.
- 개인적인 생각으로는 mouseEvent로 해당 영역을 구분하는것 같음
- 그리고 useEventListener 를 사용해 클릭이벤트로 영역을 변경 시킴

### 사용 후기

- 예시로 유저의 멤버십에 따라 해당 페이지를 볼 수만 있고 사용은 못할 때 클릭 시 Alert을 띄우는 용도로 사용하면 좋을 것 같음