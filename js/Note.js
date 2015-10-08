var Note = React.createClass({
    getInitialState: function () {
        return {editing: false};
    },
    save: function () {
        var val = this.refs.newText.getDOMNode().value;
        alert("TODO: Save note value " + val);
        this.setState({editing: false});
    },
    edit: function () {
        this.setState({editing: true});
    },
    remove: function () {
        alert("Removing Note");
    },
    renderDisplay: function () {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                    <span>
                        <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
                        <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
                    </span>
            </div>
        );
    },
    renderForm: function () {
        return (
            <div className="note">
                <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"/>
            </div>
        );
    },
    render: function () {
        return (this.state.editing ? this.renderForm() : this.renderDisplay());
    }
});

var Board = React.createClass({
    propTypes: {
        count: function (props, propName) {
            if (typeof props[propName] !== "number") {
                return new Error("The count property must be a number");
            }
            if (props[propName] > 15) {
                return new Error("Creating more then " + props[propName] + " notes is NOT allowed!");
            }
        }
    },
    getInitialState: function () {
        return {
            notes: [
                'Call Fatiha',
                'Email Obin',
                'Project Complete',
                'Make doctor\'s appoinment',
                'Study GRE',
                'Send proposal',
                'Learn React'
            ]
        };
    },
    render: function () {
        return (<div className="board">
                {
                    this.state.notes.map(function (note, i) {
                        return (<Note key={i}>{note}</Note>);
                    })
                }
            </div>
        );
    }
});

React.render(<Board count={20}/>, document.getElementById('react-container'));

