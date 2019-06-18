
import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  render() {
    return (
      <div className='master-detail-element detail'>
       <NoteEditor updateBackend={this.props.updateBackend} editnotes={this.props.editnotes} selectedNote={this.props.selectedNote} />
        {/* {this.renderContent()} */}
        {/* <div>
          {this.props.e.target.value} */}
        {/* </div> */}
      </div>
    );
  }
}

export default Content;
// import React, { Component } from 'react';
// import NoteEditor from './NoteEditor';
// import NoteViewer from './NoteViewer';
// import Instructions from './Instructions';

// /*
//   Advice: If you cannot figure out how to get this component to work,
//           move the div and renderContent up into NoteContainer and
//           try to get it to work in the parent first.
//           Then complete the rest of your app before attempting to
//           refactor to get this Content component to work.
// */
// class Content extends Component {
//   renderContent = () => {
//     if (false) {
//       return <NoteEditor />;
//     } else if (false) {
//       return <NoteViewer />;
//     } else {
//       return <Instructions />;
//     }
//   }

//   render() {
//     return (
//       <div className='master-detail-element detail'>
//         {this.renderContent()}
//         {/* <div>
//           {this.props.e.target.value} */}
//         {/* </div> */}
//       </div>
//     );
//   }
// }

// export default Content;