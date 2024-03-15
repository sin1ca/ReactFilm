function Footer() {
    return <footer className = "page-footer cyan accent-1">
        <div className="footer-copyright">
            <div className="container"> 
                © {new Date().getFullYear()} Moskot Daniil ТКБО-01-22
                <a className="black-text text-lighten-4 right" href="#">Repository</a>
            </div>
        </div>
    </footer>   
}

export { Footer };