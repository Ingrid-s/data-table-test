import React, { Component} from 'react';
var data = require ('./brandDateData.json');
var stores = require ('./assignedStore.json');

class Table extends Component{
  constructor() {
    super();

    this.state = {
      data : data,
      stores: stores.data,
    };
  }


  //Recorriendo stores para imprimir datos
 renderStoreData() {
    return this.state.stores.map((store, index) => {
       const { id, name, identifier } = store //destructuring
     
       return (
       
          <tr key={id}>
             <td>{name}</td>
          </tr>
       )
    })
 }

  renderPeasantsData() {
    return this.state.data.map((data, index) => {
       const { identifier, peasants } = data //destructuring
       
       let suma = Object.values(peasants).reduce((a,b)=> a + b);
       return (
          <tr key={identifier}>
               <td>{suma}</td>
          </tr>
       )
     
    })
 }

 renderVisitorsData() {
    return this.state.data.map((data, index) => {
       const { id, visitors } = data //destructuring
       let suma = Object.values(visitors).reduce((a,b)=> a + b);
       return (
          <tr key={id}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderAttractionData() {
    return this.state.data.map((data, index) => {
       const { id, peasants, visitors } = data //destructuring
       let suma = Object.values(visitors).reduce((a,b)=> a + b);
      let suma2 = Object.values(peasants).reduce((a,b)=> a + b);
      let promedio = suma/suma2
       return (
          <tr key={id}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

 renderCabinetData() {
    return this.state.data.map((data, index) => {
       const { id, cabinet } = data //destructuring
       let suma = Object.values(cabinet).reduce((a,b)=> a + b);
       return (
          <tr key={id}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderTicketsData() {
    return this.state.data.map((data, index) => {
       const { id, tickets } = data //destructuring
       let suma = Object.values(tickets).reduce((a,b)=> a + b);
       return (
          <tr key={id}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

  renderPersuasionData() {
    return this.state.data.map((data, index) => {
       const { id, tickets, visitors } = data //destructuring
       let suma = Object.values(tickets).reduce((a,b)=> a + b);
       let suma2 = Object.values(visitors).reduce((a,b)=> a + b);
        let promedio = suma/suma2
       return (
          <tr key={id}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

 renderRevenueData() {
    return this.state.data.map((data, index) => {
       const { id, revenue } = data //destructuring
       let suma = Object.values(revenue).reduce((a,b)=> a + b);
     
       return (
          <tr key={id}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

renderAverageTicketData() {
    return this.state.data.map((data, index) => {
       const { id, revenue, tickets } = data //destructuring
       let suma = Object.values(revenue).reduce((a,b)=> a + b);
       let suma2 = Object.values(tickets).reduce((a,b)=> a + b);
        let promedio = suma/suma2
       return (
          <tr key={id}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

  renderItemsData() {
    return this.state.data.map((data, index) => {
       const { id, items } = data //destructuring
       let suma = Object.values(items).reduce((a,b)=> a + b);
     
       return (
          <tr key={id}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderItemperTicketData() {
    return this.state.data.map((data, index) => {
       const { id, items, tickets } = data //destructuring
       let suma = Object.values(items).reduce((a,b)=> a + b);
       let suma2 = Object.values(tickets).reduce((a,b)=> a + b);
        let promedio = suma/suma2
       return (
          <tr key={id}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

 renderAveragePermanenceData() {
    return this.state.data.map((data, index) => {
       const { id, permanence, permanenceCount } = data //destructuring
       let suma = Object.values(permanence).reduce((a,b)=> a + b);
       let suma2 = Object.values(permanenceCount).reduce((a,b)=> a + b);
        let total = (((suma * 100) / suma2) / 6000000)
       return (
          <tr key={id}>
               <td>{total}</td>
          </tr>
       )
    })
 }

  render() {
    
      console.log(data)
         console.log(stores)

      //valores de cada item  
    //console.log(Object.values(this.state.data[0].peasants));
    return ( 
       <div>
           <table className="table">
           <thead>
              <tr>
                <th>Title</th>
                <th>Peasants</th>
                <th>Visitors</th>
                <th>Attraction</th>
                <th>Cabinet</th>
                <th>Tickets</th>
                <th>Persuasion</th>
                <th>Revenue</th>
                <th>Average Ticket</th>
                <th>Items</th>
                <th>Itemper Ticket</th>
                <th>Average Permanence</th>
              </tr>
            </thead>
               <tbody>
               <td>
                  {this.renderStoreData()}
                </td>
                <td>
                  {this.renderPeasantsData()}
                </td>
                <td>
                  {this.renderVisitorsData()}
                </td>
                <td>
                  {this.renderAttractionData()}
                </td>
                <td>
                  {this.renderCabinetData()}
                </td>
                <td>
                  {this.renderTicketsData()}
                </td>
                 <td>
                  {this.renderPersuasionData()}
                </td>
                <td>
                  {this.renderRevenueData()}
                </td>
                <td>
                  {this.renderAverageTicketData()}
                </td>
                <td>
                  {this.renderItemsData()}
                </td>
                <td>
                  {this.renderItemperTicketData()}
                </td>
                 <td>
                  {this.renderAveragePermanenceData()}
                </td>
               </tbody>
            </table>
       </div>
    );
  }
}

export default Table;