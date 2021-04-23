import React from "react";

class Footer extends React.Component {
    render() {
        let contacts = this.props.contact;
        return(
            <>
                <div className="footer">
                   <ul>
                       {Object.values(contacts.phones).map((item) => {
                           return <li>{item}</li>
                       })}
                   </ul>
                    <ul>
                        {Object.entries(contacts.address).map(item => {
                            return <li>{item.join(" - ")}</li>
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default Footer;