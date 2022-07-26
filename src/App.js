import "./App.css";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                    this.setState(() => ({monster: user}),
                        () => {
                            console.log(this.state.monster)
                        })
                }
            );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => ({searchField}))
    }

    render() {
        const {monster, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonster = monster.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
        return (
            <div className="App">
                <input className="search-box" type='search' placeholder="search monsters"
                       onChange={onSearchChange}/>
                {filteredMonster.map((master) => {
                    return <div key={master.id}><h1>{master.name}</h1></div>
                })}
            </div>
        );
    }
}

export default App;
