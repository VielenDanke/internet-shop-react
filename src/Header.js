import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="box-table">
                <div className="box width80 box-col"></div>
                <div className="box width20 box-col">
                    <a href="#">login</a>
                    <a href="#">sign up</a>
                </div>
            </div>
        )
    }
}

export default Header