import "./App.css";
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((user) => {
                this.setState(() => ({monster: user}));
            });
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => ({searchField}));
    };

    render() {
        const {monster, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonster = monster.filter((monster) =>
            monster.name.toLocaleLowerCase().includes(searchField)
        );
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox
                    onChangeHandler={onSearchChange}
                    placeholder="search monsters"
                    className="monsters-search-box"
                />
                <CardList monsters={filteredMonster}/>
            </div>
        );
    }
}

export default App;
