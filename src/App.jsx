import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"



import Home from "./components/Home/Home";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Header from "./components/header/Header";











const App = () => {
    console.log(process.env.REACT_APP_PUBLIC_API_KEY)
    console.log(process.env.REACT_APP_ANOTHER_API_KEY)
    return(
        <div>
            <h1>Welcome to React!</h1>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
