import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { saveGame, fetchGame, updateGame } from "../actions/fetchGames";
export class GameForm extends Component {

    state = {
        _id: this.props.game ? this.props.game._id : null,
        title: this.props.game ? this.props.game.title : '',
        cover: this.props.game ? this.props.game.cover : '',
        errors: {},
        loading: false,
        done: false
    }

    componentDidMount = () => {
        if (this.props.match.params._id) {
            this.props.fetchGame(this.props.match.params._id);
        }
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

        let isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { _id, title, cover } = this.state;
            this.setState({ loading: true });
            console.log('from game form:', this.state);
            if (_id) {
                alert('action updated from form');
                this.props.updateGame({ _id, title, cover }).then(
                    () => { this.setState({ done: true }) },
                    (err) => err.response.json().then(
                        ({ errors }) => this.setState({ errors, loading: false })
                    )
                )
            } else {
                this.props.saveGame({ title, cover }).then(
                    () => { this.setState({ done: true }) },
                    (err) => err.response.json().then(
                        ({ errors }) => this.setState({ errors, loading: false })
                    )
                )

            }
        }


    }

    render() {
        const form = <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
            <h2>Add new game</h2>

            {this.state.errors.global && <div class="ui negative message"><p>{this.state.errors.global}</p></div>}

            <div className={classnames('feild', { error: !!this.state.errors.title })} >
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    type="text" id="title" />
                    
                <span>{this.state.errors.title}</span>
            </div>
            <br></br>
            <div className={classnames('feild', { error: !!this.state.errors.cover })} >
                <label htmlFor="cover">Cover URL</label>
                <input type="text"
                    name="cover"
                    value={this.state.cover}
                    onChange={this.handleChange}

                    id="cover" />
                <span>{this.state.errors.cover}</span>
            </div>
            <br></br>
            <div className="feild">
                {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
            </div>
            <br></br>
            <div className="feild">
                <button className="ui primary button">Save</button>
            </div>

        </form>

        return (
            <div>
                {this.state.done ? <Redirect to="/games" /> : form}
            </div>

        );
    }
}

function mapStateToProps(state, props) {
    if (props.match.params._id) {
        return {
            game: state.games.find(item => item._id === props.match.params._id)
        }
    }

    return { game: null };
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameForm);
