# react-ez-table

# npm i react-ez-table

dataHeader 는  [{render: 'string', value: 'string'}, {}...] 형식으로 주어져야합니다.
단순히 화면에 보여지는 용도로만 쓰이는 render 가 있습니다.
value 는 기능을 위해 존재하며 . key 또한 value 로 설정되어 있어 유니크해야합니다.

dataItems 는
header의 value를 key 로 가지고있는 객체로 구성되어있으며 배열형태여야 합니다.
실제 데이터구조는 [{headerKey1: value, headerKey2: value2, ...} , .... ] 의 형태로 주어져야합니다.

예시 
````jsx

const Example = () => {

    const headers = [
        {
            render: '테이블헤더에 보여지는 텍스트1',
            value:  'one'
        },
        {
            render: '테이블헤더에 보여지는 텍스트2',
            value:  'two'
        },
        {
            render: '테이블헤더에 보여지는 텍스트3',
            value:  'three'
        },
        {
            render: '테이블헤더에 보여지는 텍스트4',
            value:  'four'
        },
        {
            render: '테이블헤더에 보여지는 텍스트5',
            value:  'five'
        },
    ]
    
    const items = [
        {
            'one' : 1,
            'two': 2,
            'three': 3,
            'four': 4,
            'five': 5,
        },
        {
            'one' : 6,
            'two': 7,
            'three': 8,
            'four': 9,
            'five': 10,
        },
        {
            'one' : 11,
            'two': 12,
            'three': 13,
            'four': 14,
            'five': 15,
        },
        {
            'one' : 16,
            'two': 17,
            'three': 18,
            'four': 19,
            'five': 20,
        },
    ]
    
    
    
    return (
        <EzTable
            dataHeaders={headers}
            dataItems={items}
        />
    )
}

````

이 테이블엔 기본적으로 주어지는 색상으로 black 과 white 가 있습니다.

 색상 오버라이딩을 쉽게 하기 위해 userColor 와 userTextColor 가 지원됩니다.
 userColor 는 cell 에 mouse hover 를  진행했을때 색에 영향을 줍니다.





 expand 는 기본적으로 false 상태이며 children 이라는 특별한 props 로 구성되어있어
 자신이 원하는 jsx 를 넣을 수 있습니다.

````jsx

const Example = () => {
    
    return (
        <EzTable
            dataHeaders={headers}
            dataItems={items}
            
            expand={true}
        >
            <div>
                <input type="text" placeholder="Enter text" />
                <button>Submit</button>
            </div>
        </EzTable>
    )
}

````