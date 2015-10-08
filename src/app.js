var MyComponent = React.createClass({
    render: function() {
        return <div>My React Component</div>;
    }
});
React.render(<div><MyComponent/><MyComponent/><MyComponent/></div>, document.getElementById('content'));