import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserGrid from "./components/UserGrid"
import CreateUser from "./components/CreateUser"
import Review from "./components/Review";
import ReducerExample from "./components/ReducerExample";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserGrid />} />
          <Route path="/review" element={<Review />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<CreateUser />} />
          <Route path="/reducer" element={<ReducerExample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
