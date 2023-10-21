const client = require('prom-client');

const register = new client.Registry();
client.collectDefaultMetrics({register});

//////////////////////////////////////  1  /////////////////////////////////////

const ConsumerEmissionFactorHistogram = new client.Histogram({
    name: 'Consumer_Emission_Factor',
    help: 'Emission Factor for 1 hour',
    labelNames: ['method', 'code']
});

const DemandWithoutBatteryHistogram = new client.Histogram({
    name: 'Demand_without_Battery_Charge',
    help: 'Total Demand Without Battery for 1 hour',
    labelNames: ['method', 'code']
});

const ConsumerEmissionHistogram = new client.Histogram({
    name: 'Consumer_Emission',
    help: 'Total Consumer Emission for 1 hour',
    labelNames: ['method', 'code']
});
//////////////////////////////////////  2  /////////////////////////////////////
// Register the histogram
register.registerMetric(ConsumerEmissionFactorHistogram);
register.registerMetric(DemandWithoutBatteryHistogram);
register.registerMetric(ConsumerEmissionHistogram);

//////////////////////////////////////  3  /////////////////////////////////////
exports.register = register;
exports.ConsumerEmissionFactorHistogram = ConsumerEmissionFactorHistogram;
exports.DemandWithoutBatteryHistogram = DemandWithoutBatteryHistogram;
exports.ConsumerEmissionHistogram = ConsumerEmissionHistogram;

