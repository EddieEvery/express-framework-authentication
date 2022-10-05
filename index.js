 const express =require('express');

 const app =express();

 // set static folder
 app.use(express.static(path.join(__dirname,'public')));
 app.get('/,',(req,res)=>{
    res.send('')
 })

 const PORT = process.env.PORT || 5000
 app.listen(PORT,()=>console.log(`server started on port ${PORT}`));
