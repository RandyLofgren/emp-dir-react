import React, { Component } from "react";
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AgeButton from "./components/AgeButton";
import YearsButton from "./components/YearsButton";
import employees from "./employees.json";
import API from "./components/utils/API";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };
  componentDidMount() {
    this.searchPeople();
  }
  searchPeople = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  sortByAge = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = employees.name.sort();
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  sortByYears = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = employees.name.sort();
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each employees object
  render() {
    return (
      <Wrapper>
        <AgeButton/>
        <YearsButton/>
        
        <Title>Employees</Title>
        
        {this.state.employees.map(employees => (
          <EmpCard
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.image}
            occupation={employees.occupation}
            location={employees.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
