import React, { Component} from 'react';
const data = require ('./brandDateData.json');
const stores = require ('./assignedStore.json');

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
    return this.state.stores.map((store) => {
       const { name, identifier } = store //destructuring
     
       return (
          <tr key={identifier}>
             <td>{name}</td>
          </tr>
       )
    })
 }

  renderPeasantsData() {
    return this.state.data.map((data) => {
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
    return this.state.data.map((data) => {
       const { identifier, visitors } = data //destructuring
       let suma = Object.values(visitors).reduce((a,b)=> a + b);
       return (
          <tr key={identifier}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderAttractionData() {
    return this.state.data.map((data) => {
       const { identifier, peasants, visitors } = data //destructuring
       let suma = Object.values(visitors).reduce((a,b)=> a + b);
      let suma2 = Object.values(peasants).reduce((a,b)=> a + b);
      let promedio = suma/suma2
       return (
          <tr key={identifier}>
               <td>{promedio.toFixed(2)}</td>
          </tr>
       )
    })
 }

 renderCabinetData() {
    return this.state.data.map((data) => {
       const { identifier, cabinet } = data //destructuring
       let suma = Object.values(cabinet).reduce((a,b)=> a + b);
       return (
          <tr key={identifier}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderTicketsData() {
    return this.state.data.map((data) => {
       const { identifier, tickets } = data //destructuring
       let suma = Object.values(tickets).reduce((a,b)=> a + b);
       return (
          <tr key={identifier}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

  renderPersuasionData() {
    return this.state.data.map((data) => {
       const { identifier, tickets, visitors } = data //destructuring
       let suma = Object.values(tickets).reduce((a,b)=> a + b);
       let suma2 = Object.values(visitors).reduce((a,b)=> a + b);
        let promedio = suma/suma2
       return (
          <tr key={identifier}>
               <td>{promedio.toFixed(2)}</td>
          </tr>
       )
    })
 }

 renderRevenueData() {
    return this.state.data.map((data) => {
       const { identifier, revenue } = data //destructuring
       let suma = Object.values(revenue).reduce((a,b)=> a + b);
     
       return (
          <tr key={identifier}>
               <td>{suma.toFixed(2)}</td>
          </tr>
       )
    })
 }

renderAverageTicketData() {
    return this.state.data.map((data) => {
       const { identifier, revenue, tickets } = data //destructuring
       let suma = Object.values(revenue).reduce((a,b)=> a + b);
       let suma2 = Object.values(tickets).reduce((a,b)=> a + b);
        let promedio = suma/suma2;
       return (
          <tr key={identifier}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

  renderItemsData() {
    return this.state.data.map((data) => {
       const { identifier, items } = data //destructuring
       let suma = Object.values(items).reduce((a,b)=> a + b);
     
       return (
          <tr key={identifier}>
               <td>{suma}</td>
          </tr>
       )
    })
 }

 renderItemperTicketData() {
    return this.state.data.map((data) => {
       const { identifier, items, tickets } = data //destructuring
       let suma = Object.values(items).reduce((a,b)=> a + b);
       let suma2 = Object.values(tickets).reduce((a,b)=> a + b);
        let promedio = ((suma/suma2)/100).toPrecision(2);
       return (
          <tr key={identifier}>
               <td>{promedio}</td>
          </tr>
       )
    })
 }

 renderAveragePermanenceData() {
    return this.state.data.map((data) => {
       const { identifier, permanence, permanenceCount } = data //destructuring
       let suma = Object.values(permanence).reduce((a,b)=> a + b);
       let suma2 = Object.values(permanenceCount).reduce((a,b)=> a + b);
        let total = (((suma * 100) / suma2) / 6000000)
       return (
          <tr key={identifier}>
               <td>{total.toFixed(2)}</td>
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