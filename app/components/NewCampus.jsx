// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { postCampus, enterNewCampus } from '../store';
// import { connect } from "react-redux";

// function NewCampus (props) {
    
//     return (
//       <div className="well">
//         <form onSubmit={props.handleSubmit} name="campusName" className="form-horizontal">
//           <fieldset>
//             <legend>Create New Campus</legend>
//             <div className="form-group">
//               <label className="col-xs-2 control-label"></label>
//               <div className="col-xs-8">
//                 <input value={props.inputName} 
//                 className="form-control" 
//                 type="text" 
//                 onChange={props.handleNameChange} 
//                 name="campusName" placeholder="Campus Name"/><br />

//                 <input value={props.inputImageURL} 
//                 className="form-control" 
//                 type="text" 
//                 onChange={props.handleImageChange} 
//                 name="imageURL" placeholder="Image URL"/><br />
//               </div>
//             </div>
//             <div className="form-group">
//               <div className="col-xs-10 col-xs-offset-2">
//                 <button type="submit" className="btn btn-success">
//                 Submit
//                 </button>
//               </div>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     );
// }

// const mapStateToProps = (state, ownProps) => {
//   console.log("State", state)
//   return {
//     newCampusEntry: state.newCampusEntry
//   }
// }

// const mapDispatchToProps = function (dispatch, ownProps) {
//   return {
//     handleNameChange: function (evt) {
//       dispatch(enterNewCampus(evt.target.value));
//     },
//     handleImageChange: function (evt) {
//       dispatch(enterNewCampus(evt.target.value));
//     },
//     handleSubmit: function (evt) {
//       evt.preventDefault();
//       dispatch(postCampus({ name: evt.target.campusName.value }))
//     }
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);



// //                  <button type="submit" className="btn btn-success">  // disabled={props.inputName.length < 1 || props.inputName.length > 40 || props.inputImageURL.length < 1}
///////////////////////////////////

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postCampus, enterNewCampus } from '../store';
import { connect } from "react-redux";

// import axios from 'axios';

class NewCampus extends Component {


  constructor() {
    super();
    this.state = {
      inputName: '',
      inputImageURL: '',
      nameInputDirty: false,
      imageInputDirty: false,
      redirectToNewPage: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      inputName: event.target.value,
      nameInputDirty: true
    });
  }
  handleImageChange(event) {
    this.setState({
      inputImageURL: event.target.value,
      imageInputDirty: true,
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   const name = this.state.inputName;
  //   const imageURL = this.state.inputImageURL;

  //   axios.post('/api/campuses', {
  //     name,
  //     imageURL
  //   })
  //   .then(res => res.data)

  //   this.setState({
  //     inputName: '',
  //     inputImageURL: '',
  //     nameInputDirty: false,
  //     imageInputDirty: false,
  //     redirectToNewPage: false
  //   });
  // }

  render() {

    const inputLength = this.state.inputName.length;
    const tooLong = inputLength > 40;
    const tooShort = inputLength < 1 && this.state.nameInputDirty;
    const noImage = this.state.inputImageURL.length < 1 && this.state.imageInputDirty;

    let warning;
    if(tooShort) {
      warning = "Please enter a campus name";
    } else if (tooLong) {
      warning = "Campus name length exceeded";
    }
    
    return (
      <div className="well">
        <form onSubmit={this.props.handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Create New Campus</legend>
            {
              warning && <div className="alert alert-warning">{ warning }</div>
            }
            {
              noImage && <div className="alert alert-warning">Please add an image URL</div>
            }
            <div className="form-group">
              <label className="col-xs-2 control-label"></label>
              <div className="col-xs-8">
                <input value={this.state.inputName} 
                className="form-control" 
                type="text" 
                onChange={this.handleNameChange} 
                name="campusName" placeholder="Campus Name"/><br />

                <input value={this.state.inputImageURL} 
                className="form-control" 
                type="text" 
                onChange={this.handleImageChange} 
                name="imageURL" placeholder="Image URL"/><br />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={this.state.inputName.length < 1 || this.state.inputName.length > 40 || this.state.inputImageURL.length < 1}>
                Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = function (state, ownProps) {

//   console.log('This is my own props', ownProps)
//   // const channelId = Number(ownProps.match.params.channelId);

//   return {
//     channel: state.channels.find(channel => channel.id === channelId) || { name: '' },
//     messages: state.messages.filter(message => message.channelId === channelId),
//     channelId
//   };
// };

const mapDispatchToProps = function (dispatch, ownProps) {

  console.log("This is this ", ownProps)

  return {
    // handleChange: function (evt) {
    //   dispatch(enterNewCampus(evt.target.value));
    // },
    handleSubmit: function (evt) {
      console.log('This state ', ownProps)
      evt.preventDefault();
      dispatch(postCampus({ name: evt.target.value }))
    }
  };
}

export default connect(null, mapDispatchToProps)(NewCampus);

//  handleSubmit(event) {
//     event.preventDefault();

//     const name = this.state.inputName;
//     const imageURL = this.state.inputImageURL;

//     axios.post('/api/campuses', {
//       name,
//       imageURL
//     })
//     .then(res => res.data)

//     this.setState({
//       inputName: '',
//       inputImageURL: '',
//       nameInputDirty: false,
//       imageInputDirty: false,
//       redirectToNewPage: false
//     });
//   }