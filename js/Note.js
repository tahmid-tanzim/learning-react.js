var Note = React.createClass({
    edit: function () {
        alert("Editing Note");
    },
    remove: function () {
        alert("Removing Note");
    },
    getInitialState: function () {
        return {checked: true};
    },
    handleCheck: function () {
        this.setState({checked: !this.state.checked});
    },
    render: function () {
        return (
            <div>
                <div className="note">
                    <p>{this.props.children}</p>
                    <span>
                        <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
                        <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
                    </span>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/> This
                        box is {this.state.checked ? "checked" : "unchecked"}
                    </label>
                </div>
            </div>
        );
    }
});

React.render(<Note>Hello World</Note>, document.getElementById('react-container'));









