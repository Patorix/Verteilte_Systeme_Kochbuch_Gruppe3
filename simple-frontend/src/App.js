import React from "react";
import { alleRezepte } from "./RestClient";

class App extends React.Component {
    // constructor initializes component state data
    // and binds methods
    constructor(props) {
        super(props);
        this.state = {
            kochbuch: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    // requests and waits for data by calling RestClient's
    // fetchAllBooks. as soon as the data is there it is set
    // as a state
    async fetchDisplayData() {
        let data = await alleRezepte();
        this.setState({ kochbuch: data });
    }

    // this is displayed on the screen
    render() {
        return (
            <div>
                <div id="title">📚 Kochbuch</div>
                    <button id="fetcher" onClick={this.fetchDisplayData}>
                        Rezepte auflisten
                    </button>
                    <div className="data">
                        {/* generates a div for every entry */}
                        {this.state.kochbuch.map((Rezept, key) => (
                        <div key={key}>
                            {Rezept.id}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;