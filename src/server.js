import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngines';
import webRouter from './routes/web';


let app = express();

viewEngine(app);

webRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let prot = process.env.PORT || 3000;

app.listen(prot, () => {
    console.log('listening on port' + prot);
});