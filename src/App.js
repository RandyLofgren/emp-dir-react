import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";
import axios, { get } from "axios";


class App extends Component {

  state = {
    employees: [],
    unTouchedList: [],
    searchTerm: ""
  };

  componentDidMount() {
    const pullEmployees = async () => {
      const data = await get('https://randomuser.me/api/?results=30&nat=us');

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

  handleSearch = event => {
    const searchValue = event.target.value
    const filteredList = this.state.unTouchedList.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(searchValue.toLowerCase()));
    this.setState({ employees: filteredList, searchTerm: searchValue })
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

  handleFirstSort = event => {
    console.log("Clicked First Name") 
 }

  render() {
    const empData = this.state.employees
    return (
      <Wrapper>
        {console.log(empData)}


        <Title>Employees</Title>

        <SearchForm
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
       
       <table className="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col" >Pic</th>
        <th scope="col" onClick={e => console.log("Clicked First")}>First</th>
        <th scope="col" onClick={e => console.log("Clicked Last")}>Last</th>
        <th scope="col" onClick={e => console.log("Clicked Age")}>Age</th>
      </tr>
    </thead>
    <tbody>
          {empData.map(employee => (
            <TableRow

              key={employee.login.username}
              first={employee.name.first}
              image={employee.picture.medium}
              age={employee.dob.age}
              last={employee.name.last}
            />
            ))}
             </tbody>
  </table>
      </Wrapper>
    );
  }
}

export default App;
