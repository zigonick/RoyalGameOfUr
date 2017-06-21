module.exports = function(config)
{
    config.set({
        basePath: '',
        frameworks: [
            'mocha',
            'chai',
            'sinon',
            'karma-typescript'
        ],
        plugins:[
            require("karma-mocha"),
            require("karma-mocha-reporter"),
            require("karma-chai"),
            require("karma-sinon"),
            require("karma-typescript")
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots"],
        mochaReporters: {
            output: 'autowatch'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        autoWatchBatchDelay: 1000,
        browersNoActivityTimeout: 10000,
        files: [
            "src/**/*.ts",
            "src/**/*.js",
            "test/**/*.ts",
            "test/**/*.js"
        ],
        proxies: []
    });
}