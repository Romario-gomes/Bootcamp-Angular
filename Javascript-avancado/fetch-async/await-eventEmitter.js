/* fetch('/data.json').then(responseStream =>{
    return responseStream.json().then(data => {
        console.log(data);
    })
    //console.log(responseStream)
}) */
fetch('/data.json',/* {
    /* method: 'post',
    body: JSON.stringify 

} */).then(responseStream =>{
    if (responseStream.status === 200){
        return responseStream.json()
    } else{
        throw new Error('Request error');
    }
})
 .then(data=>{
    console.log(data);
    }).catch(err => {
                            //se tiver erro de rede será pego no catch
    console.log('Erro', err);
    });
   
//Async / Await

const simpleFunction = async () => {
    return 12345;
};
(simpleFunction().then(data =>{
    console.log(data);
}));