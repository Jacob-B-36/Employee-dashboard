function test(){
    fetch("http://127.0.0.1:3000/test")
    .then(function(response){
        console.log('res',response);
    })
    .then(function(data){
        console.log('data',data);
    })
}