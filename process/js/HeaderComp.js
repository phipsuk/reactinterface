var React = require('react');

 var HeaderComponent = React.createClass({
            render: function() {
                return  <header><nav className="navbar navbar-default" role="navigation"><div className="container"><div className="navbar-header"><img src={"http://www.capitalone.co.uk/images/c1/brand/logo.png"}/><a href="#"><h1>C1 Head</h1></a></div></div></nav></header>;
            }
        });

module.exports=HeaderComponent;


//css class should be referenced className

//img need to be referenced like this" <img src={"http://www.capitalone.co.uk/images/c1/brand/logo.png"}/> 
// NOTE: {} around the image url and the img needs to be closed with />

