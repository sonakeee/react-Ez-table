import './App.scss';
import EzTable from "./app/EzTable";

function App() {

    const dataHeaders = [
        {
            render: '보이는모습 하나 ',
            value:  '하나'
        },
        {
            render: '보이는모습 둘',
            value:  '둘'
        },
        {
            render: '보이는모습 셋 ',
            value:  '셋'
        },
        {
            render: '보이는모습 넷',
            value:  '넷'
        },
        {
            render: '보이는모습 다섯',
            value:  '다섯'
        },
    ]

    const dataItems = [
        {
            '하나' : 1,
            '둘': 2,
            '셋': 3,
            '넷': 4,
            '다섯': 5,
        },
        {
            '하나' : 6,
            '둘': 7,
            '셋': 8,
            '넷': 9,
            '다섯': 10,
        },
        {
            '하나' : 11,
            '둘': 12,
            '셋': 13,
            '넷': 14,
            '다섯': 15,
        },
        {
            '하나' : 16,
            '둘': 17,
            '셋': 18,
            '넷': 19,
            '다섯': 20,
        },
    ]


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


    const userColor = 'rgba(63, 149, 200, 1)'
    const userTextColor = 'rgba(0, 0, 0, 1)'

    return (
        <div className="App">
            <div style={{width: '50%', margin: '100px auto 0'}}>
                <EzTable
                    dataHeaders={dataHeaders}
                    dataItems={dataItems}


                    defaultColor={'black'}


                    userColor={userColor}
                    userTextColor={userTextColor}

                    expand={true}

                >
                    <div>
                        <input type="text" placeholder="Enter text" />
                        <button>Submit</button>
                    </div>
                </EzTable>
            </div>

        </div>
    );
}

export default App;
