import React, { Component } from "react";
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AgeButton from "./components/AgeButton";
import YearsButton from "./components/YearsButton";
// import employees from "./employees.json";
import API from "./components/utils/API";
import axios, {get} from "axios";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: []
  };

 componentDidMount() {
    const pullEmployees =  async  () => {
      const data = await get('https://randomuser.me/api/?results=20&nat=us');
      
      this.setState({ employees: data.data.results })
    }
    pullEmployees()
  }

  // componentDidMount() {
  //   this.searchPeople();
  // }
  // searchPeople = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

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
    const empData = this.state.employees
    return (
      <Wrapper>
        {console.log(empData)}
        <AgeButton/>
        <YearsButton/>
        
        <Title>Employees</Title>
        
        {empData.map(employee => (
          <EmpCard
            id={employee.id}
            key={employee.id}
            name={employee.name.first + " " + employee.name.last}
            image={employee.picture.large}
            age={employee.dob.age}
            location={employee.registered.age}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
