// import React from "react"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";
// import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
// import Flicking from "@egjs/react-flicking";
// import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";
// import About from "./containers/About"

// export default function App() {

//   return (
//     <Router>
//       {/* <Flickings/> */}
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// // function About() {
// //   return <h2>About</h2>;
// // }

// function Topics() {
//   let match = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/${match}`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }


// function Flickings() {
//   return ( 
//   <Flicking
//     tag="div"
//     viewportTag="div"
//     cameraTag="div"
//     onNeedPanel={(e) => { }}
//     onMoveStart={(e) => { }}
//     onMove={(e) => { }}
//     onMoveEnd={(e) => { }}
//     onHoldStart={(e) => { }}
//     onHoldEnd={(e) => { }}
//     onRestore={(e) => { }}
//     onSelect={(e) => { }}
//     onChange={(e) => { }}
//     classPrefix="eg-flick"
//     deceleration={0.0075}
//     horizontal={true}
//     circular={false}
//     infinite={true}
//     infiniteThreshold={0}
//     lastIndex={Infinity}
//     threshold={40}
//     duration={100}
//     panelEffect={x => 1 - Math.pow(1 - x, 3)}
//     defaultIndex={0}
//     inputType={["touch", "mouse"]}
//     thresholdAngle={45}
//     bounce={10}
//     autoResize={false}
//     adaptive={false}
//     zIndex={2000}
//     bound={false}
//     overflow={false}
//     hanger={"50%"}
//     anchor={"50%"}
//     gap={10}
//     moveType={{ type: "snap", count: 1 }}
//     collectStatistics={true}
//   >
//     <div className="panel">panel 0</div>
//     <div className="panel">panel 1</div>
//     <div className="panel">panel 2</div>
//     <div className="panel">panel 2</div>
//     <div className="panel">panel 2</div>
//     <div className="panel">panel 2</div>
//   </Flicking>
//   )
// }