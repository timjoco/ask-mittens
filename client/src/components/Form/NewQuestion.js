// import React, { Component } from 'react';
// import { reduxForm } from 'redux-form';
// import MittensForm from './MittensForm';
// import MittensFormReview from './MittensFormReview';

// class NewQuestion extends Component {
//   state = { showFormReview: false };

//   renderContent() {
//     if (this.state.showFormReview) {
//       return (
//         <MittensFormReview
//           onCancel={() => this.setState({ showFormReview: false })}
//         />
//       );
//     }

//     return (
//       <MittensForm
//         onFormSubmit={() => this.setState({ showFormReview: true })}
//       />
//     );
//   }

//   render() {
//     return <div>{this.renderContent()}</div>;
//   }
// }

// export default reduxForm({
//   form: 'mittensForm',
// })(NewQuestion);
