let data = ['yossi','moshe','yael','benny'];


const findByName=(name)=>{

    
    //Maker
    return new Promise((res,rej)=>{
        
        data.map((item)=>{
            if (item==name) {
                res(item);
            }
        })
        rej('not found name like this')
    })
}


const main1 = ()=>{
    let name = 'beny';
    //receiver
    const promise =findByName(name)
    promise.then((mes)=>{
        console.log(mes);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const main2 = async ()=>{
    let name = 'beny';
    try {
        const res = await findByName(name)
        console.log(res);


    } catch (error) {
        console.log('catch error '+error);
    }
    
}



// main1();
// main2();