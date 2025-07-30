import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
    <Router>
        <div className="h-full w-full mx-auto max-w-[47.5rem] p-6">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
            </Routes>

            <Footer />

        </div>
    </Router>
);

export default App;
