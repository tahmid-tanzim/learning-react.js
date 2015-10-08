var MyContainer = React.createClass({displayName: "MyContainer",
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("h2", null, this.props.text), 
        React.createElement("p", null, this.props.children)
        )
        );
    }
});
React.render(React.createElement("div", null, 
                React.createElement(MyContainer, {text: "Hello World"}, "This is a Hello."), 
                React.createElement(MyContainer, {text: "How are you?"}, "This is a how are you?"), 
                React.createElement(MyContainer, {text: "Good Bye"}, "This is a good bye.")
    ), document.getElementById('content'));