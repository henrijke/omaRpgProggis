'use strict';

//***************************************************** SETUP STEP
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const bodyParser = require('body-parser');
const GoogleAssistant = require('./googleassistant');
const deviceCrendentials = require('./devicecredentials.json');
const CREDENTIALS = {
    client_id: deviceCredentials.client_id,
    client_secret: deviceCredentials.client_secret,
    refresh_token: deviceCredentials.refresh_token,
    type: "authorized_user"
};
const assistant = new GoogleAssistant(CREDENTIALS);

const dice = require("./dice");
const classes = require("./classes");
const races = require("./races");
const characterFunctions = require("./characterFunctions");

const app = express();
//setuppi käytetään consolidatee et saadaan käytettyy handlebarii
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine', 'hbs');

// support json encoded bodies
app.use(bodyParser.json());
//support encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

//**************************************************** Firestorage funktiot

//haetaan data tietyllä id:llä
const getData = (referenceId)=>{
    return new Promise((resolve,reject)=>{
        db.collection('characters').get()
            .then((snapshot) =>{
                let kakka = [];
                snapshot.forEach((doc) =>{
                    kakka.push({
                        value: doc.data().value
                    });
                });
            resolve(kakka);
            return kakka;
        }).catch((err) => {
            reject(err);
        })
    });
};

//lähetetään data ja tallennetaan
// pitää katsoa onko saman nimistä valmiiksi ja jos on niin korvataan
// set tekee sen valmiiksi, jos on olemassa jo niin korvaa
//muuten tekee uuden
//mut miten ratkasta setissä referenssi...
// db.collection('characters').doc(reference).set(data);
const addData=(data) => {
    return new Promise((resolve,reject)=>{
        db.collection('characters').add(data)
            .then((ref) =>{
            resolve(true);
            return true;
        }).catch((err)=>{
            console.log('Error adding new name', err);
            reject(err);
        });
    });
};

const searchData = (data)=>{
    return new Promise ((resolve,reject) => {
        db.collection('characters').get()
    })
};
//*********************************************************** Osoterequestien käsittely
app.post('/',(request,response)=>{
    console.log(request);
    addData(request.body.value).then(data =>
        response.redirect('/')
    ).catch(err => console.log(err));
});
//index
app.get('/',(request,response)=>{
    response.set('Cached-Control','public, max-age=300, s-maxage=600');
    getData().then(data => {
        response.render('index', {data});
        return data;

    }).catch(err => console.log(err));
});
//aamukampa
app.get('/aamut',(request,response)=>{
    response.set('Cached-Control','public, max-age=300, s-maxage=600');
        response.render('aamukampa', {});
});

app.get('/nodeTester',(request,response)=>{
    response.set('Cached-Control','public, max-age=300, s-maxage=600');
    response.render('assistantTester', {});
});
app.get('/testAssistant',(request,response)=>{

});

//lisätään uus hahmo
app.get('/newRandomCharacter',(request,response)=>{
    const randomCharacter = characterFunctions.characterFunctions.newRandCharacter();
    response.send(randomCharacter)
});

//tallennetaan hahmo TODO user input check
app.post('/saveChar',(request,response)=>{
    appData(request.body.char).then(data =>{
        response.render('index',{});
        return data;
        }).catch(err=> console.log(err));
});

app.get('/testi.json',(request,response)=>{
    response.set('Cached-Control','public, max-age=300, s-maxage=600');
    getData().then(data => {
        response.json(data);
        return data;

    }).catch(err => console.log(err));
});


// TOIMIVA
app.get('/moi',(req,res)=>{
    console.log('tervetuloa moi puolelle');
    res.send({
        "moi":"moi",
        "heippa": "heippa"
    });
});


// TOIMIVA. MUTTA MITEN SAAT REQUESTIN PYLLYN ARVON?!?!
app.post('/post',(req,res)=>{
        console.log('tervetuloa posti puolelle');
        console.log(req.body);
        console.log(req.body.pylly);
       // console.log(Object.values(req.body));
        res.send({
            "kakka":"kakka",
            "hieno":"hieno"
        })
});

exports.app = functions.https.onRequest(app);