const express = require('express');
const app = express();
 
app.get('/products/all', (request, response)=>{
    if(request.query.sort){
        response.send('Products, '+ request.query.sort);
    }
    response.send('Products, '+ request.headers.page+', '+request.headers.sort+', '+request.headers.order);
})

app.get('/products/:productId-:productSize-:productColor', (request, response)=>{
    response.send('Products ' + request.params.productId+', '+ request.params.productSize+', '+ request.params.productColor );
})

app.get('/products/:productId', (request, response)=>{
    response.send('Products' + request.params.productId);
})




app.listen(3000)