function Nav() {
    return (
        <Router>
            <div>
                <div>
                    <Link to="#">Home</Link>
                    <Link to="/sobre">Sobre mí</Link>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/habilidades">Habilidades</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/header' Component={Header} />
                </Routes>
            </div>
        </Router>
    );
}