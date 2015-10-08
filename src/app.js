var MyContainer = React.createClass({
    render: function() {
        return (
            <div>
            <h2> Hello World </h2>
        <p>My Name is Tanzim</p>
        </div>
        );
    }
});
React.render(<MyContainer />, document.getElementById('content'));