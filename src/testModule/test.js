var React = require('react');

var superTest = {
    alle: function(){
        React.render(
            <h1>Hello, world!</h1>,
            document.getElementById('example')
        );
        alert(7);
    }
};

module.exports = superTest;