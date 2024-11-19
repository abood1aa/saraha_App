import express from 'express'
import bootstrap from './src/bootsrtap.js'
import sendEmail from './src/utils/SendEmail.js'
const app = express()

bootstrap(app,express)
app.listen(3009,()=>{
    console.log('server done');
})