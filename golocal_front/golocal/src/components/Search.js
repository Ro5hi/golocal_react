// import styled from 'styled-components'
// import React, { Component } from "react";

//     class Search extends Component {
//         state = {
//             query: "",
//             data: [],
//             filteredData: []
//           };
        
//           handleInputChange = event => {
//             const query = event.target.value;
        
//             this.setState(prevState => {
//               const filteredData = prevState.data.filter(element => {
//                 return element.name.toLowerCase().includes(query.toLowerCase());
//               });
        
//               return {
//                 query,
//                 filteredData
//               };
//             });
//           };
        
//           getData = () => {
//             fetch(`http://localhost:3001/businesses`)
//               .then(response => response.json())
//               .then(data => {
//                 const { query } = this.state;
//                 const filteredData = data.filter(element => {
//                   return element.name.toLowerCase().includes(query.toLowerCase());
//                 });
        
//                 this.setState({
//                   data,
//                   filteredData
//                 });
//               });
//           };
        
//           componentWillMount() {
//             this.getData();
//           }
        
//           render() {
//             return (
//               <Container>
//                   <Header>
//                       Looking for something?
//                   </Header>
//                 <form>
//                   <input
//                     placeholder="Search for..."
//                     value={this.state.query}
//                     onChange={this.handleInputChange}
//                     />
//                 </form>
//                 <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
//             </Container>
//             );
//           }
//         }
      
//       const Container = styled.div`
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         left: 0px;
//         top: 960px;
//         background: #FBEABE;
//       `
    
//       const Header = styled.div`
//         position: absolute;
//         left: 8.04%;
//         right: 55.71%;
//         top: -3.22%;
//         bottom: 0
//         font-family: Abril Fatface;
//         font-style: strong;
//         font-weight: normal;
//         font-size: 64px;
//         line-height: 86px;
//         display: flex;
//         align-items: center;
//         text-align: center;
//         letter-spacing: 0.015em;
//         color: #000000;
//     `

//     export default Search