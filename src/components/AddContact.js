import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: "",
        mobile: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        
        if (this.state.name === "" || this.state.mobile === "" || this.state.email === "") {
            alert("All field are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", mobile:"", email:""});
        // console.log(this.state);
    };

    render() {
        return (
            <>
                <div className='container'>
                    <form onSubmit={this.add}>
                        <h2>Create New Contact</h2>

                        <input type="text" name='name' placeholder="| Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />

                        <input type="text" name='mobile' placeholder="| Mobile No."
                            value={this.state.mobile}
                            onChange={(e) => this.setState({ mobile: e.target.value })} />

                        <input type="email" name='email' placeholder="| Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />

                        <div className="btn-box">
                            <button>Add Contact</button>
                        </div>

                    </form>
                </div>
            </>
        );
    }
}

export default AddContact;