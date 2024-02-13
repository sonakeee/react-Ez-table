import React from 'react';
import TestButton from "./lib/TestButton/TestButton";
import EzTable from "./lib/EzTable/EzTable";
import {DataHeader} from "./types/types";


function App() {

    const dataHeaders:DataHeader[] = [
        { render: "PLAYER", value: "player" },
        { render: "TEAM", value: "team"},
        { render: "NUMBER", value: "number"},
        { render: "POSITION", value: "position"},
        { render: "LAST ATTENDED", value: "lastAttended"},
        { render: "COUNTRY", value: "country"},
        { render: "ETC", value: "etc"},
    ]

    const dataItems = [
        { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', lastAttended: "Davidson", country: "USA", etc: 'value'},
        { player: "Lebron James", team: "LAL", number: 6, position: 'F', lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" , etc: 'value'},
        { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', lastAttended: "Texas-Austin", country: "USA", etc: 'value'},
        { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', lastAttended: "Filathlitikos", country: "Greece", etc: 'value'},
    ]
    const userColor = 'rgba(63, 149, 200, 1)'
    const userTextColor = 'rgba(0, 0, 0, 1)'
    return (
        <div className="App">
            <TestButton/>
                <EzTable
                    dataHeaders={dataHeaders}
                    dataItems={dataItems}

                    defaultColor={'black'}



                    expand={true}
                >
                    <div>
                        <input type="text" placeholder="Enter text" />
                        <button>Submit</button>
                    </div>
                </EzTable>
        </div>
    );
}

export default App;
