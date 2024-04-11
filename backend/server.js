import express from'express';
const app=express();
app.get('/',(req,res)=>{
    res.send('server is ready');
});
app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'m'
        },
        {
            id:2,
            title:'n'
        },
        {
            id:3,
            title:'o'
        }
    ];
    res.send(jokes);
});
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});