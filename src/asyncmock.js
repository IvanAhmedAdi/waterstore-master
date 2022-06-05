const products = [
    { 
        id: '1', 
        name: 'Iphone13', 
        price: 1000, 
        category: 'celular', 
        img: '/images/iphone13.png', 
        stock: 10, 
        description:'Descripcion de Iphone 13'
    }, 
    { 
        id: '2', 
        name: 'Tablet', 
        price: 1000, 
        category: 'tablet', 
        img: '/images/tablet.png', 
        stock: 15, 
        description:'Descripcion de Tablet'
    }, { 
        id: '3', 
        name: 'SmartTv', 
        price: 1000, 
        category: 'tablet', 
        img: '/images/tv.png', 
        stock: 10, 
        description:'Descripcion de SmartTv'
    },
];

export const getProducts = () => {
    const ok = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok){
                resolve(products);
            }else{
                reject('Error');
            }
            
            
        }, 2000)
    })
}