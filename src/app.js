var MyContainer = React.createClass({
    render: function() {
        return (
            <div>
            <h2>{this.props.text}</h2>
        <p>{this.props.children}</p>
        </div>
        );
    }
});
React.render(<div>
                <MyContainer text="Hello World">This is a Hello.</MyContainer>
                <MyContainer text="How are you?">This is a how are you?</MyContainer>
                <MyContainer text="Good Bye">This is a good bye.</MyContainer>
    </div>, document.getElementById('content'));