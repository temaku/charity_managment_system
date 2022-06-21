const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const helmet  = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const authRoutes = require('./Routes/authRoute');
const categoryRoutes = require('./Routes/categoryRoute');
const charityRoute = require('./Routes/charityRoute');
const donationRoute = require('./Routes/donationRoute');
const userRoute = require('./Routes/userRoute');
const fundraiseRoute = require('./Routes/fundraiseRoute');
const donateFundRoute = require('./Routes/donateFundRoute');
const eventsRoute =require('./Routes/eventsRoute');
const taskRoute = require('./Routes/tastRoute');
const reportRoute = require('./Routes/reportRoute');
const registerEvent = require('./Routes/eventRegisterRoute');
const adminRoute = require('./Routes/adminRoute');
const budgetRoute = require('./Routes/budgetRoute');
const generateRoute =require('./Routes/generateReport');



const errorHandler = require('./middleware/errhandler');
app.use(morgan('dev'));
app.use(express.json())
app.use(helmet())
app.use(xss())
app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100,
}))

app.use(cors());


app.options('*', cors());
app.use(express.static(__dirname+"/public/uploads"))


// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

// auth route
app.use('/api/v1/auth',authRoutes);
// admin route
app.use('/api/v1/admin',adminRoute);

// category route
app.use('/api/v1/categories',categoryRoutes);

// charity route
app.use('/api/v1/charities',charityRoute);
app.use('/api/v1/donations',donationRoute);
app.use('/api/v1/fundraises',fundraiseRoute);
app.use('/api/v1/donateFund',donateFundRoute);
app.use('/api/v1/tasks',taskRoute);
app.use('/api/v1/reports',reportRoute);
app.use('/api/v1/events',eventsRoute);
app.use('/api/v1/register',registerEvent);
app.use('/api/v1/budget',budgetRoute);
app.use('/api/v1/generateReport',generateRoute);


app.use('/api/v1/users',userRoute);

app.use(errorHandler)
module.exports =app;
