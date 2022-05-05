import React from "react";
import { alleRezepte } from "./RestClient";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kochbuch: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    async fetchDisplayData() {
        let data = await alleRezepte();
        this.setState({ kochbuch: data });
    }

    render() {
        return (
            <div>
                <div id="title">📚 Kochbuch</div>
                    <button id="fetcher" onClick={this.fetchDisplayData}>
                        Rezepte auflisten
                    </button>
                    <div className="data">
                        {this.state.kochbuch.map((kb, key) => (
                        <div key={key}>
                            Rezept: {kb.rezept}, Dauer: {kb.dauer}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;