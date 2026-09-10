import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import { useScrollBehaviour } from './hooks';

export default function App() {
    useScrollBehaviour();

    return (
        <div className="shell">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Nav />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
