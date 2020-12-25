//promises
const doSomethingPromise = () => new Promise((resolve, reject)=>{

    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);  
});

const doOtherthingPromise = () => new Promise((resolve, reject)=>{
    // throw new Error('Something wrong');
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);  
});
/*
Tratamento sem ultilizar trycatch

doSomethingPromise.then( data => console.log(data))
.catch(Error => console.log('Error ao processar')); */
doSomethingPromise
.then(data => {
    console.log(data)
    return doOtherthingPromise;
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('ops',error));
/* 
 Promisse.all([doSomethingPromise(), doOtherthingPromise]).then(data=>{
    console.log(data[0].split('');
    console.log(data[0].split('');
})
.catch(err => {
    console.log(err);
});
 
    Maneira alternativa(metodo race)
Promisse.race([doSomethingPromise(), doOtherthingPromise]).then(data =>{
    console.log(data);
});
*/


/* Estados da promisse
    Pending = em execução
    FulFilled = Terminou de executar
    Rejected = Erro
*/

// callbacks
/* function doSomething(callback){
    setTimeout(function(){
        callback('First data');
    }, 1000);
    
}

function doOtherthing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
    
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            try {
                doOtherthing(function(data2){
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);  
                    } catch (error) {
                        //handle error
                    }
                    
                });
            } catch (error) {
                //handle error
            }
            
        });
    }
    catch(err){
        //handle error
    }
    
}

doAll(); */


