const http=require('http');
const PORT=3000;
const server=http.createServer((req,res)=>{
    res.write("Hello, this is some response from your first Node.js server");
    res.end();
});


server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});