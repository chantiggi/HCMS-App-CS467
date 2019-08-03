import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpackDevServer from './webpack/dev-server';

// Use dotenv to load environment variables from a.env into process.env
dotenv.config({
    silent: true,
});

// Express app setup
const app = express();

// View engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// include webpack-dev-server for development only
if (process.env.NODE_ENV !== 'production') {
    webpackDevServer(app);
}

// Logger
app.use(logger('combined'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cookie parser
app.use(cookieParser());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// Use routes
import routes from './server/routes/index.js';
app.use('/', routes);
import horseRoutes from './server/routes/approutes.js'; //import the route
horseRoutes(app); //register the route
app.use('/viewhorses', horseRoutes);
/* ALL other route handlers will go here
Note that these are currently being handled using REACT routing...
....
....
....
*/


// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: app.get('env') === 'development' ? err : {},
    });
    next();
});

export default app;