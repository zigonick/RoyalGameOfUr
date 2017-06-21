module.exports = () => {
    return {
        files: [
            'src/**/*.js',
            'src/**/*.ts',
            { 
                pattern: 'node_modules/sinon/pkg/sinon.js', 
                instrument: false 
            }
        ],
        tests: [
            'test/**/*Tests.js'
        ],
        debug: true
    };
};