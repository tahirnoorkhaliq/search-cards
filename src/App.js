import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
//https://jsonplaceholder.typicode.com/users
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [searchField, setsearchField] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setCards(users);
      });
  }, []);

  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchFieldStr = event.target.value.toLowerCase();
    setsearchField(searchFieldStr);
  };

  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title"> Cards </h1>
      <SearchBox
        className="search-box"
        onChangeEventHandler={onSearchChange}
        placeholder="Search Cards"
      />
      <CardList displayCards={filteredCards} />
    </div>
  );
};
/*class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { cards: users };
          },
          () => {
            console.log(this.state.cards);
          }
        )
      );
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { cards, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredCards = cards.filter((card) => {
      return card.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
      <h1 className="app-title"> Cards </h1>
        <SearchBox className="search-box" onChangeEventHandler={onSearchChange} placeholder="Search Monsters"/>
        <CardList displayCards={filteredCards}/>
      </div>
    );
  }
}*/

export default App;
