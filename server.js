import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
const profileRoute = import('./routes/profile.js')

//load env
dotenv.config({path: './config.env'})

const app = express()
//dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
// morgan gives results like: GET /api/v1/profile/psn/OGgluttonoustoad 404 9.781 ms - 174
}


console.log(profileRoute)
//profile routes
//import('./routes/profile.js')
app.set('/api/v1/profile', profileRoute)



const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
});