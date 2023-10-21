const client = require('prom-client');

const register = new client.Registry();
client.collectDefaultMetrics({register});

//////////////////////////////////////  1  /////////////////////////////////////
// TOTAL(MAHAWELI)
const MahaweliHistogram = new client.Histogram({
    name: 'MAHAWELI',
    help: 'Total Mahaweli generation for 15 mins',
    labelNames: ['method', 'code']
});
// TOTAL(LAXAPANA)
const LaxapanaHistogram = new client.Histogram({
    name: 'LAXAPANA',
    help: 'Total Laxapana generation for 15 mins',
    labelNames: ['method', 'code']
});

const SamanalaHistogram = new client.Histogram({
    name: 'TOTAL_SAMANALA',
    help: 'Total Samanala generation for 15 mins',
    labelNames: ['method', 'code']
});

const LakvijayatHistogram = new client.Histogram({
    name: 'TOTAL_LAKVIJAYA',
    help: 'Total Lakvijaya generation for 15 mins',
    labelNames: ['method', 'code']
});


const CEBOilHistogram = new client.Histogram({
    name: 'TOTAL_CEBOIL',
    help: 'Total CEB Oil generation for 15 mins',
    labelNames: ['method', 'code']
});
  
const IPPHistogram = new client.Histogram({
    name: 'TOTAL_IPP',
    help: 'Total IPP generation for 15 mins',
    labelNames: ['method', 'code']
});

const WindHistogram = new client.Histogram({
    name: 'TOTAL_WIND',
    help: 'Total Wind generation for 15 mins',
    labelNames: ['method', 'code']
});

const SolarHistogram = new client.Histogram({
    name: 'TOTAL_SOLAR',
    help: 'Total Solar generation for 15 mins',
    labelNames: ['method', 'code']
});
    
const BiomassHistogram = new client.Histogram({
    name: 'TOTAL_BIOMASS',
    help: 'Total Biomass generation for 15 mins',
    labelNames: ['method', 'code']
});

const IPPMHPHistogram = new client.Histogram({
    name: 'TOTAL_IPPMHP',
    help: 'Total IPP MHP generation for 15 mins',
    labelNames: ['method', 'code']
});
  
const TotalGenerationHistogram = new client.Histogram({
    name: 'TOTAL_GENERATION',
    help: 'Total generation for 15 mins',
    labelNames: ['method', 'code']
});

const TotalEmissionHistogram = new client.Histogram({
    name: 'TOTAL_Emission',
    help: 'Total emission for 15 mins',
    labelNames: ['method', 'code']
});

const EmissionFactorHistogram = new client.Histogram({
    name: 'Emission_Factor',
    help: 'Emission factor for 15 mins',
    labelNames: ['method', 'code']
});
//////////////////////////////////////  2  /////////////////////////////////////
// Register the histogram
register.registerMetric(MahaweliHistogram);
register.registerMetric(LaxapanaHistogram);
register.registerMetric(SamanalaHistogram);
register.registerMetric(LakvijayatHistogram);
register.registerMetric(CEBOilHistogram);
register.registerMetric(IPPHistogram);
register.registerMetric(WindHistogram);
register.registerMetric(SolarHistogram);
register.registerMetric(BiomassHistogram);
register.registerMetric(IPPMHPHistogram);
register.registerMetric(TotalGenerationHistogram);
register.registerMetric(TotalEmissionHistogram);
register.registerMetric(EmissionFactorHistogram);

//////////////////////////////////////  3  /////////////////////////////////////
exports.register = register;
exports.MahaweliHistogram = MahaweliHistogram;
exports.LaxapanaHistogram = LaxapanaHistogram;
exports.SamanalaHistogram = SamanalaHistogram;
exports.LakvijayatHistogram = LakvijayatHistogram;
exports.CEBOilHistogram = CEBOilHistogram;
exports.IPPHistogram = IPPHistogram;
exports.WindHistogram = WindHistogram;
exports.SolarHistogram = SolarHistogram;
exports.BiomassHistogram = BiomassHistogram;
exports.IPPMHPHistogram = IPPMHPHistogram;
exports.TotalGenerationHistogram = TotalGenerationHistogram;
exports.TotalEmissionHistogram = TotalEmissionHistogram;
exports.EmissionFactorHistogram = EmissionFactorHistogram;