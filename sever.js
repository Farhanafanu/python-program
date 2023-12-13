var http=require('http')
var fs=require('fs')
var url=require('url')
// http.createServer(functionserver).listen(700)
// // function server(req,res){
// //     res.write('crossroads')
// //     res.end()

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    // console.log(q.pathname)



    if(q.pathname==='/'){
    fs.readFile('sample.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()
    })
    }
    else if(q.pathname==='/signup'){
        fs.readFile('signup.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
        })

    }
    else if(q.pathname==='/signupaction'){
        console.log(q.query.email)
        
        
        res.write('<h1>'+q.query.email+'</h1>')
        res.end( )
        }
    
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('error')
        res.end( )

    }

    
}).listen(7000,function(){
    console.log('server started')

})
// }
