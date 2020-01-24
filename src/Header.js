import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="box-table">
                <div className="box width80 box-col"></div>
                <div className="box width20 box-col">
                    {(this.props.authenticated) ? (
                        <div>
                            <a href="/office">office</a>
                            <a href="/logout">logout</a>
                        </div>
                    ) : (
                        <div>
                            <a href="/login">login</a>
                            <a href="/sign">sign up</a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Header