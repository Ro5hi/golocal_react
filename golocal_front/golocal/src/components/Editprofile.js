// import React from 'react'
// // import Uploader from '.src/components/Uploader.js'
// import { connect } from 'react-redux'
// import { updateProfileForm } from '../actions/registerProfileForm.js'
// import { register } from '../actions/currentuser.js'
// import styled from 'styled-components'
// import { Component } from 'react/cjs/react.production.min'

//     const Container = styled.div`
//     position: absolute;
//     width: 778px;
//     height: 600px;
//     left: 0px;
//     top: 4px;

//     background: #FBEABE;
//     border: 1px solid rgba(9, 112, 38, 0.1);
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     `

//     // const Uploader = styled.div`
//     // position: absolute;
//     // width: 244px;
//     // height: 233px;
//     // left: 485px;
//     // top: 164px;
//     // `

//     const Name = styled.div`
//     position: absolute;
//     width: 361px;
//     height: 25px;
//     left: 0px;
//     top: 22px;
//     background: #FFFFFF;
//     `
//     const Username = styled.div`
//     position: absolute;
//     width: 360px;
//     height: 56px;
//     left: 29px;
//     top: 207px;
//     `

//     const Password = styled.div`
//     position: absolute;
//     width: 361px;
//     height: 57px;
//     left: 28px;
//     top: 302px;
//     `
//     const Email = styled.div`
//     position: absolute;
//     width: 361px;
//     height: 25px;
//     left: -1px;
//     top: 31px;

//     background: #FFFFFF;
//     `


//     const Business = styled.div`
//     position: absolute;
//     width: 361px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `

//     const Address = styled.div`
//     position: absolute;
//     width: 361px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `

//     const City = styled.div`
//     position: absolute;
//     width: 95px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `

//     const State = styled.div`
//     position: absolute;
//     width: 55px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `

//     const Zipcode = styled.div`
//     position: absolute;
//     width: 73px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `

//     const Category = styled.div`
//     position: absolute;
//     width: 95px;
//     height: 25px;
//     left: -1px;
//     top: 32px;
//     background: #FFFFFF;
//     `
//     const submitBtn = styled.div`
//     position: absolute;
//     width: 102px;
//     height: 26px;
//     left: 0px;
//     top: 1px;
//     background: #FFFFFF;
//     border: 1px solid #000000;
//     box-sizing: border-box;
//     `

//     class EditProfile extends Component {

//         editProfile = ({ profileFormData, updateSignupForm, register, history }) => {
//             const submitInput = event => {
//                 const { name, value } = event.target
//                 const userInfo = {
//                     ...profileFormData,
//                     [name]: value,
//                 }
//                 updateSignupForm(userInfo)
//             }

//             businessInfo = event => {
//                 const { name, value } = event.target 
//                 const submitInput = {
//                     ...profileFormData,
//                     business: {
//                         ...profileFormData.business,
//                         [name]: value
//                     }
//                 } 
//                 updateSignupForm(submitInput)
//             }

//             submitInput = event => {
//                 event.preventDefault()
//                 register(profileFormData, history)
//             }

//                 return (
//                     <form onSubmit={this.submitInput}>
//                         <Container>
//                                 <Name>
//                                     <input placeholder="Name" value={profileFormData.name} name="name" type="text" onChange={this.submitInput} />
//                                 </Name>
//                                 <Email>
//                                     <input placeholder="Email" value={profileFormData.email} name="email" type="text" onChange={this.submitInput} />
//                                 </Email>
//                                 <Username>
//                                     <input placeholder="Username" value={profileFormData.username} name="username" type="text" onChange={this.submitInput} />
//                                 </Username>
//                                 <Password>
//                                     <input placeholder="Password" value={profileFormData.password} name="password" type="text" onChange={this.submitInput} />
//                                 </Password>
//                                     <Business>
//                                         <input placeholder="Business Name" value={profileFormData.business.name} name="business_name" type="text" onChange={this.submitInput} />
//                                     </Business>
//                                     <Address>
//                                         <input placeholder="Business Address" value={profileFormData.business.address} name="business_address" type="text" onChange={this.submitInput} />
//                                     </Address>
//                                     <City>
//                                         <input placeholder="Business City" value={profileFormData.business.city} name="business_city" type="text" onChange={this.submitInput} />
//                                     </City>
//                                     <State>
//                                         <input placeholder="Business State" value={profileFormData.business.state} name="business_state" type="text" onChange={this.submitInput} />
//                                     </State>
//                                     <Zipcode>
//                                         <input placeholder="Business Zipcode" value={profileFormData.business.zipcode} name="business_zipcode" type="text" onChange={this.submitInput} />
//                                     </Zipcode>
//                                         <Category>
//                                             <select name="type" id="category">
//                                             <option value=""></option>
//                                             <option value="Unique">Unique Find</option>
//                                             <option value="Shop">Local Shop</option>
//                                             <option value="Service">Service</option>
//                                             <option value="Eat & Drink">Eat & Drink</option>
//                                             </select>
//                                         </Category>
//                                 <submitBtn>
//                                     <input type="submit" value="Update Account"/>
//                                 </submitBtn>
//                         </Container>
//                     </form>
//                     )
//                 }
//             }        
//             // Extract data
//             mapStateToProps = state => {
//             return {
//                 profileFormData: state.signupForm
//             }
//         }
        
                
                
//     export default connect(mapStateToProps, { updateProfileForm, register} )(EditProfile)