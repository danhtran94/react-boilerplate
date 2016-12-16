import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <section className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                React Boilerplate
                            </h1>
                            <h2 className="subtitle">
                                React + SASS + Bulma
                            </h2>
                        </div>
                    </div>
                </section>
                <body>
                    <section className="section">
                        <div className="container">
                            <div className="heading">
                                <h1 className="title">Section</h1>
                                <h2 className="subtitle">
                                    A simple container to divide your page into
                                    <strong>&nbsp;sections</strong>, like the one you're currently reading
                                </h2>
                            </div>
                        </div>
                    </section>
                </body>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma</strong>
                                by
                                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                            </p>
                            <p>
                                <a className="icon" href="https://github.com/jgthms/bulma">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}

export default App