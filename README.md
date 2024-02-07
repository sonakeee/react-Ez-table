# React-Ez-Table


    // dataHeader 는  [{render: 'string', value: 'string'}, {}...] 형식으로 주어져야합니다.
    // 단순히 화면에 보여지는 용도로만 쓰이는 render 가 있습니다.
    // value 는 기능을 위해 존재하며 . key 또한 value 로 설정되어 있어 유니크해야합니다.

    // dataItems 는
    // header의 value를 key 로 가지고있는 객체로 구성되어있으며 배열형태여야 합니다.
    // 실제 데이터구조는 [{headerKey1: value, headerKey2: value2, ...} , .... ] 의 형태로 주어져야합니다.

    // 이 테이블엔 기본적으로 주어지는 색상으로 black 과 white 가 있습니다.

    // 색상 오버라이딩을 쉽게 하기 위해 userColor 와 userTextColor 가 지원됩니다.
    // userColor 는 cell 에 mouse hover 를  진행했을때 색에 영향을 줍니다.



    // expand 는 기본적으로 false 상태이며 children 이라는 특별한 props 로 구성되어있어
    // 자신이 원하는 jsx 를 넣을 수 있습니다.
    // 예시 코드를 보여주면 좋을듯..
