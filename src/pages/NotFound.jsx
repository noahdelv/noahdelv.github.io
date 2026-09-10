import { Link } from 'react-router-dom';
import { useTitle } from '../hooks';
import { ArrowRight } from '../components/Icons';

export default function NotFound() {
    useTitle('404 — Noah Del Valle');

    return (
        <>
            <header className="page-head">
                <div className="section-label is-bare">
                    [ 404 ]
                </div>
                <h1 className="page-title">NO SUCH PATH</h1>
                <p className="prose page-intro">That page doesn’t exist. Everything else is one hop away.</p>
                <div className="btn-row">
                    <Link className="btn btn-primary" to="/">
                        BACK TO HOME
                        <ArrowRight />
                    </Link>
                </div>
            </header>
        </>
    );
}
