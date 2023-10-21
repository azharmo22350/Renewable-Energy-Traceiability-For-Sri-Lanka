const client = require('prom-client');

const register = new client.Registry();
client.collectDefaultMetrics({register});

const ActualHistogram = new client.Histogram({
    name: 'Actual',
    help: 'Total CO2e for 1 hour',
    labelNames: ['method', 'code']
});

const PredictionsHistogram = new client.Histogram({
    name: 'Predictions',
    help: 'Total CO2e for 1 hour',
    labelNames: ['method', 'code']
});

// Register the histogram
register.registerMetric(ActualHistogram);
register.registerMetric(PredictionsHistogram);

exports.register = register;
exports.ActualHistogram = ActualHistogram;
exports.PredictionsHistogram = PredictionsHistogram;