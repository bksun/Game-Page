import React, { Component } from 'react';
import classnames from 'classnames';

export class GameForm extends Component {
    state = {
        title: '',
        cover: '',
        errors: {}
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            });

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //validation
        let errors = {};
        if (this.state.title === '') {
            errors.title = "Can't be empty";
        }
        if (this.state.cover === '') {
            errors.cover = "Can't be empty";
        }

        this.setState({ errors });
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div class="ui form">
                    <h2>Add new game</h2>

                    <div className={classnames('feild', { error: !!this.state.errors.title })} >
                        <label htmlFor="title">Title</label>
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            type="text" id="title" />
                        <span>{this.state.errors.title}</span>
                    </div>
                    <div className={classnames('feild', { error: !!this.state.errors.cover })} >
                        <label htmlFor="cover">Cover URL</label>
                        <input type="text"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}

                            id="cover" />
                        <span>{this.state.errors.cover}</span>
                    </div>
                    <div className="feild">
                        {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
                    </div>

                    <div className="feild">
                        <button className="ui primary button">Save</button>
                    </div>

                </div>
            </form>
        );
    }
}

export default GameForm;