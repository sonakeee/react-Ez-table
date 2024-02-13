# react-ez-table


# 제작동기
다른사람들이 잘 만들어둔 라이브러리를 내 코드에 잘 적용하는것이 기본이자 능력이라고 생각한다.

그럼 이게 기본이라면 심화는 뭘까.

그에 대해서 제대로 이해하는것..? 혹은 직접 만들어보는것 이라는 생각을 하게 되었다. 

직접 만들어본다면 이해에도 도움이 될 것이니까..

그 외에 타 라이브러리를 사용하면서 오버라이딩이 불편하다던가, 원하는 기능이 없다던가 , 조금 더 요구하는 디자인 디테일에 맞추기 위해서 등 ...

이러한 불편사항들 또한 이것을 만드는 계기가 되었다. 

개인적으로 라이브러리를 사용하지않고 직접 구현한 적이 꽤 있는데

그 중 가장 먼저 생각난것이 data table 이었다.

또 핵심 라이브러리는 직접 만드는 경우도 꽤 있다하니, 

이러한 경험이 도움이 될 것이라고 생각한다.

여러 경험을 해보고 다른곳에 PR도 해보고싶다.


# 빌드
예전에 vue 로 유사한것을 만들때는 어떻게 했었는지 기억이 잘 안났고 

그냥 가볍게 웹팩 사용해서 번들링 하면 되는게 아닐까 생각했지만 하나의 js 파일로 빌드하는건 

타 라이브러리를 보았을때 적합하지 않다고 생각하였다.

물론 쉽게 포기할 수는 없어서 웹팩으로 내가 원하는 방식으로 만들 수 있는가를 꽤 오래 찾아보았지만 진행이 되질않아

그냥 ts로 진행하기로 마음을 먹었다.

그리고 나는 scss 를 사용하는데 css 로 빌드해서 배포할지 그냥 scss 를 그대로 내보낼지에 대해서도 조금 고민해봤는데

scss 로 보내게된다면 패키지 크기가 더 커질것이라고 생각해여 css 로 내보내기로 정하였고 

scss 로 내보내게 된다면 장점으로 생각한 user custom 부분은 손이 더 가더라도 내가 최대한 지원을 해 줘야겠다 라는 생각을 했다.


빌드과정중에 아직 해결하지못한 이슈. 

tsx 파일에 import 하는 파일을 scss 에서 css 로 변경하고싶은데

환경변수를 설정해서 동적임포트를 하려고하니까 es5 를 타겟으로 설정하기도했고... 사실 올려도 안됨...

그래서 cross-env 나 dotenv 를 사용해서 package.json 을 수정해봐도 안된다.

gpt 한테 물어보니 환경변수는 런타임 시점에 값이 결정되고 tsc 는 컴파일하는거니까 ... 안된다고 하는데 그럴싸하긴한데  

그럼 타입스크립트를 사용할때는 환경변수를 적용하지말라는건가 ? 

그렇다면 빌드할때랑 테스트할때랑 값을 다르게 하는것 자체를 못한다고 ? 위 까지는 말도안되는데? 라고 생각하면서도 오케이 하겠는데 이건 진짜 동의못하겠다 

환경변수가 아니더라도 이 문제를 해결하기 위한 방법이 있을것이라고 생각한다. 

지금은 멍청하게 일일히 하드코딩중..



# npm i react-ez-table

사용방법 docs page 를 따로 만들계획이다


dataHeader 는  [{render: 'string', value: 'string'}, {}...] 형식으로 주어져야합니다.

단순히 화면에 보여지는 용도로만 쓰이는 render 가 있습니다.

value 는 기능을 위해 존재하며 . key 또한 value 로 설정되어 있어 유니크해야합니다.

dataItems 는 header의 value를 key 로 가지고있는 객체로 구성되어있으며 배열형태여야 합니다.

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
