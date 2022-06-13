

const products = [
    { 
        id: '1', 
        name: 'Iphone13', 
        price: 1000, 
        category: 'celulares', 
        img: '/images/iphone13.png', 
        stock: 10, 
        description:'Descripcion de Iphone 13'
    }, 
    { 
        id: '2', 
        name: 'tablet', 
        price: 1000, 
        category: 'tablets', 
        img: '/images/tablet.png', 
        stock: 15, 
        description:'Descripcion de Tablet'
    }, { 
        id: '3', 
        name: 'smart', 
        price: 1000, 
        category: 'smarts', 
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

export const getProductsByCategory = (categoriaId) => {
    return new Promise(resolve => {
        setTimeout (() => {
          resolve(products.filter(prod => prod.category === categoriaId))
        },500)
    })
}