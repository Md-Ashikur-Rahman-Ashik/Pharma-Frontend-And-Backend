const img = document.querySelectorAll('img')

 


img.forEach(add =>{
add.classList.add('img-fluid')
})

document.addEventListener('DOMContentLoaded' , ()=>{
    const products = document.querySelectorAll('.item')
    products.forEach((product,index)=>{
        const productId = `product-${index + 1}`;
        product.setAttribute('id', productId)
   
        const Link = document.createElement('a')
    
    Link.href =`shop-single.html?Id=${productId}`
   
    Link.textContent = 'View Details'    
})
})