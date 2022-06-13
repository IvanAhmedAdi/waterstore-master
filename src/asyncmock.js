

const products = [
    { 
        id: '1', 
        name: 'Iphone13', 
        price: 1000, 
        category: 'Celulares', 
        img: '/images/iphone13.png', 
        stock: 10, 
        description:'Descripcion de Iphone 13'
    }, 
    { 
        id: '2', 
        name: 'tablet', 
        price: 1000, 
        category: 'Tablets', 
        img: '/images/tablet.png', 
        stock: 15, 
        description:'Descripcion de Tablet'
    }, { 
        id: '3', 
        name: 'smart', 
        price: 1000, 
        category: 'Smart', 
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


