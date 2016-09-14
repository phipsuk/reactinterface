var React = require('react');

 var HeaderComponent = React.createClass({
            render: function() {
                return <nav className="navbar navbar-default" role="navigation"><div className="container"><div className="navbar-header"><a className="navbar-brand" href="#"><h1>Wisdom Pet Medicine</h1></a></div></div></nav>;
            }
        });

module.exports=HeaderComponent;
