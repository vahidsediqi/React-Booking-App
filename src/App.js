import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home";
import Lists from "./pages/lists/Lists";
import SingleList from "./pages/singleList/SingleList";

function App() {
  return (
     <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/lists" element={<Lists/>} />
           <Route path="/lists/:id" element={<SingleList/>} />
        </Routes>
     </Router>
  );
}

export default App;
