import React, { Component } from "react";
import EmpCard from "./components/EmpCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AgeButton from "./components/AgeButton";
import YearsButton from "./components/YearsButton";
import SearchForm from "./components/SearchForm";
import axios, {get} from "axios";


class App extends Component {

  state = {
    employees: [],
    unTouchedList: [],
    searchTerm:""
  };

 componentDidMount() {
    const pullEmployees =  async  () => {
      const data = await get('https://randomuser.me/api/?results=20&nat=us');
      
      this.setState({ employees: data.data.results, unTouchedList: data.data.results })
    }
    pullEmployees()
  }

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
    
  // };

  handleSearch = event =>{
    const searchValue = event.target.value
    const filteredList = this.state.unTouchedList.filter(user=>user.name.first.toLowerCase().includes(searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(searchValue.toLowerCase()));
    this.setState({employees: filteredList, searchTerm: searchValue})
  }

  // mapped.sort(function(a, b) {
  //   if (a.name.first > b.name.first) {
  //     return 1;
  //   }
  //   if (a.name.first < b.name.first) {
  //     return -1;
  //   }
  //   return 0;
  // });

  sortByYears = event => {
   
    const employees = this.state.employees.years.sort();
    
    this.setState({ employees });
  };

  
  render() {
    const empData = this.state.employees
    return (
      <Wrapper>
        {console.log(empData)}
        <AgeButton/>
        <YearsButton/>
        <Title>Employees</Title>
        <SearchForm 
          handleSearch={this.handleSearch} 
          searchTerm={this.state.searchTerm}
        />
        {empData.map(employee => (
          <EmpCard
            
            key={employee.login.username}
            name={employee.name.first + " " + employee.name.last}
            image={employee.picture.large}
            age={employee.dob.age}
            years={employee.registered.age}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
