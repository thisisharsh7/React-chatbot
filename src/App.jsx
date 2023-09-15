
import Enter from "./components/Enter"
import Home from "./components/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Detail from "./components/Detail"

//this is the main file for routing , all our route is protected

function App() {
  const { register, detail } = useSelector((state) => state.checker)
  return (

    <div className="App">
      <div className="flex py-2  w-full justify-center ">
        <div className="max-w-xs w-full border-[1px] border-black h-[463px]">
          <Routes>
            <Route path="/login" element={
              register ? <Navigate to="/" /> : <Enter />
            } exact />
            <Route path="/" element={
              register ? <Home /> : <Navigate to="/login" />} exact
            />
            <Route path="/detail" element={
              (register && detail)
                ?
                <Detail />
                :
                (register)
                  ?
                  <Navigate to="/" /> : <Navigate to="/login" />} exact />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App
