const { configure } = require('@serenity-js/core');
const { PlaywrightTestRunner } = require('@serenity-js/playwright-test-runner');

exports.config = configure({
    runner: new PlaywrightTestRunner({
        require: [ './src/tests/**/*.ts' ],  // Ruta de tus tests
    }),
});
