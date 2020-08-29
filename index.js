const http = require( 'http' );
const fs   = require( 'fs' );

function serverFunction( request, response ){

    var url = request.url.substr( 1 );
    
    if(fs.existsSync( url ) ) {
        //console.log( url );
        fs.readFile( url , ( err, data )=>{
            if( err ){
                console.error( err );
                return ;
            }
            response.writeHead( 200 );
            response.end( data );
        } )

        return ;

    };
   // console.log( request.url );

    response.writeHead( 200 );
    response.end( "<h1>Henlo, warudo</h1>" );
};

http.createServer(serverFunction).listen( 80 , ()=>{
    console.log( "Server is now active" );
});