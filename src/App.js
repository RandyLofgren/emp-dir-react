import React, { Component } from "react";

import Title from "./components/Title";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";
import { get } from "axios";
import './index.css'

class App extends Component {

  state = {
    employees: [],
    unTouchedList: [],
    searchTerm: "",
    direction: ""
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

  //  mapFirst = [this.state.employees]

  // mapFirst.sort(a, b) {
  //   if (a.name.first > b.name.first) {
  //     return 1;
  //   }
  //   if (a.name.first < b.name.first) {
  //     return -1;
  //   }
  //   return 0;
  // };


  handleAgeSort = (whatToSort1, whatToSort2) => {
    const sortedList = this.state.employees.sort((a, b) => {
      let fa = a[whatToSort1][whatToSort2],
        fb = b[whatToSort1][whatToSort2];
        if (this.state.direction !== "asc"){
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }else{
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        }
   } )
   const newDirection = this.state.direction !== "asc" ? "asc" : "dec"
   this.setState({
     employees: sortedList,
     direction: newDirection
   })
  } 



  handleFirstSort = (whatToSort1, whatToSort2) => {
    const sortedList = this.state.employees.sort((a, b) => {
      let fa = a[whatToSort1][whatToSort2].toLowerCase(),
        fb = b[whatToSort1][whatToSort2].toLowerCase();
        if (this.state.direction !== "asc"){
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }else{
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        }
   } )
   const newDirection = this.state.direction !== "asc" ? "asc" : "dec"
   this.setState({
     employees: sortedList,
     direction: newDirection
   })
  } 
  
  render() {
    const empData = this.state.employees
    return (
      <div className="wrap">
        {console.log(empData)}


        <Title>Employees</Title>

        <SearchForm
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <div className="tableHolder">

          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col" >Picture</th>
                <th scope="col" className="click" onClick={()=>this.handleFirstSort("name","first")}
                >First</th>
                <th scope="col" className="click" onClick={()=>this.handleFirstSort("name","last")}>Last</th>
                <th scope="col" className="click" onClick={()=>this.handleAgeSort("dob","age")}>Age</th>
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
        </div>
      </div >
    );
  }
}

export default App;
