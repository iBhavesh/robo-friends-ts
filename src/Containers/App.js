import React from "react";
import "./App.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import { robots } from "../robots";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value });
    console.log("event value:", event.target.value);
  }

  render() {
    console.log("state searchField:", this.state.searchField);
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox
          searchField={this.state.searchField}
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
