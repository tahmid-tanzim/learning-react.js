var MyContainer = React.createClass({displayName: "MyContainer",
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("h2", null, " Hello World "), 
        React.createElement("p", null, "My Name is Tanzim")
        )
        );
    }
});
React.render(React.createElement(MyContainer, null), document.getElementById('content'));