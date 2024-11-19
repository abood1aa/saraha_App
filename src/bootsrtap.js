import dbconnection from "../database/connection.js"
import userRouter from './moduls/user/user.routes.js'
import massageRouter from './moduls/massage/massage.routes.js'




const bootstrap=(app,express)=>{
    app.use(express.json())
    dbconnection()
    app.use('/user',userRouter)
    app.use('/massage',massageRouter)
    
    }
    
    export default bootstrap