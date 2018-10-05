import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";

class Topics extends Component {
    render() { 
        const TopicOG = ({ match }) => (
          <div>
            <h3>{match.params.topicId}</h3>
          </div>
        );
        const match = this.props.match
        return ( 
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
            
                <Route path={`${match.url}/:topicId`} component={TopicOG} />
                <Route
                    exact
                    path={match.url}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }

}

export default Topics;

// const TopicsOG = ({ match }) => (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
  
//       <Route path={`${match.url}/:topicId`} component={TopicOG} />
//       <Route
//         exact
//         path={match.url}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
  
//   const TopicOG = ({ match }) => (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );