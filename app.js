var fishingCart = [{
    product: 'Power Bait',
    quantity: 2,
    price: 7.5
  },{
    product: 'Spin to Win Lures',
    quantity: 5,
    price: .95
  },{
    product: 'Penn Spinfisher V SSV8500LL Spinning Reel',
    quantity: 1,
    price: 145.42
  },{
    product: 'Browning Fishing Micro Stalker Rod',
    quantity: 1,
    price: 85
  },{
    product: 'BucketO\'Worms',
    quantity: 2,
    price: 3
  },{
    product: 'Tumps Yacht',
    quantity: 1,
    price: 4600002.99
  }]
  
  
  
  
  
  //Calculate the total cost of the cart provided to the checkout function
let total = 0

  function checkout(cart){ 
      for (let i = 0; i < fishingCart.length; i++) {
          const product = fishingCart[i];
          total += item.price * item.quantity

          
      }
    return total
  }
  
  
  console.log(checkout(fishingCart))