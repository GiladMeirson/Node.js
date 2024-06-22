const main = ()=>{

    AsyncFunc();
    syncFunc();
    console.log('ping')
   
}
const main2 = ()=>{
    let AsyncRes = AsyncFunc2();
    let SyncRes = SyncFunc2();
    console.log(AsyncRes,SyncRes);
}




//example 1
const syncFunc = ()=>{
    console.log('syncFunc Ping');
}

const AsyncFunc = ()=>{
     setTimeout(()=>{
        console.log('AsyncFunc ping')
        return;
    })
    
}




//example 2
const SyncFunc2 = ()=>{
    return 'this is a sync function';
}

const AsyncFunc2 = ()=>{
    setTimeout(()=>{
        return 'this is a async function';
    })
}



//main();
//main2();