var MyComponent = React.createClass({displayName: "MyComponent",
    render: function() {
        return React.createElement("div", null, "My React Component");
    }
});
React.render(React.createElement("div", null, React.createElement(MyComponent, null), React.createElement(MyComponent, null), React.createElement(MyComponent, null)), document.getElementById('content'));