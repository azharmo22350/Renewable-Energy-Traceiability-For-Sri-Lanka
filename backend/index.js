const express = require('express');
const app = express();
const data = require('./data/index.js');
const metrics = require('./metric.js');
const predictions = require('./predictions.js');
const lstm_data = require('./Lstm_data/lstm_index.js');
const lstm_index_predictions = require('./Lstm_data/lstm_index_predictions.js');
const consumer_data = require ('./Consumer/consumer_index.js')
const consumer_metrics = require ('./Consumer/consumer_metric.js')


app.get('/metrics', async (req, res) => {
    const dataPoints = data.data();

    ////////////////////////////////////// 4 /////////////////////////////////////
    metrics.MahaweliHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL(MAHAWELI)']));

    metrics.LaxapanaHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL(LAXAPANA)']));

    metrics.SamanalaHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL(SAMANALA)']));

    metrics.LakvijayatHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL LAKVIJAYA']));
    
    metrics.CEBOilHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL CEB OIL']));

    metrics.IPPHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL(IPP)']));

    metrics.WindHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL(WIND)']));

    metrics.SolarHistogram.observe({
        method: req.method,
        code: res.status
        
    },parseFloat(dataPoints['TOTAL(SOLAR)']));

    metrics.BiomassHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL (BIOMASS)']));

    metrics.IPPMHPHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Total IPP MHP (adjusted with peek SMS value)']));

    metrics.TotalGenerationHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['TOTAL GENERATION']));

    metrics.TotalEmissionHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Total Emission']));

    metrics.EmissionFactorHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Emission Factor']));


    res.setHeader('Content-Type', metrics.register.contentType);
    res.send(await metrics.register.metrics());
});

//predictions data
app.get('/actuals', async (req, res) => { 
    const dataPoints = lstm_data.data();

    predictions.ActualHistogram.observe({
        method: req.method,
        code: res.status
    }, parseFloat(dataPoints['Actual Emission']));

    res.setHeader('Content-Type', predictions.register.contentType);
    res.send(await predictions.register.metrics());
    //return array containing 270 data points
    
});

//predictions data
app.get('/predictions', async (req, res) => { 
    const dataPoints = lstm_index_predictions.data();

    predictions.PredictionsHistogram.observe({
        method: req.method,
        code: res.status
    }, parseFloat(dataPoints['Predicted Emission']));

    res.setHeader('Content-Type', predictions.register.contentType);
    res.send(await predictions.register.metrics());
    //return array containing 270 data points
    
});

//consumer data
app.get('/consumer', async (req, res) => {
    const dataPoints = consumer_data.data();
    
    consumer_metrics.ConsumerEmissionFactorHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Emission Factor']));
    

    consumer_metrics.DemandWithoutBatteryHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Demand without Battery Charge']));

    consumer_metrics.ConsumerEmissionHistogram.observe({
        method: req.method,
        code: res.status
    },parseFloat(dataPoints['Consumer Emission']));



    res.setHeader('Content-Type', consumer_metrics.register.contentType);
    res.send(await consumer_metrics.register.metrics());
});


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080, metrics are exposed on http://localhost:8080/metrics');
   
});

app.listen(8081, () => {
    
    console.log('Server is running on http://localhost:8081, metrics are exposed on http://localhost:8081/actuals');
    
});



app.listen(8082, () => {
   
    console.log('Server is running on http://localhost:8082, metrics are exposed on http://localhost:8082/predictions');
   
});

app.listen(8083, () => {
    
    console.log('Server is running on http://localhost:8083, metrics are exposed on http://localhost:8083/consumer');
});


