import React, { Component } from 'react';
export class GameForm extends Component {
    state = {
        title: '',
        cover: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (

            <form>
                <div class="ui form">
                    <h2>Add new game</h2>

                    <div className="feild">
                        <label htmlFor="title">Title</label>
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            type="text" id="title" />
                    </div>
                    <div className="feild">
                        <label htmlFor="cover">Cover URL</label>
                        <input type="text"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}

                            id="cover" />
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