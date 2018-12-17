import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import { RouterList, RouterLink } from './RouterStyled';


const AppRouter = () => (
    <Router>
        <>
            <nav>
                <RouterList>
                    <RouterLink>
                        <Link to="/hello">Hello</Link>
                    </RouterLink>
                    <RouterLink>
                        <Link to="/">Home</Link>
                    </RouterLink>
                </RouterList>
            </nav>
            <div>
                <Route path='/' exact component={Home} />
            </div>
        </>
    </Router>
);

export default AppRouter;
