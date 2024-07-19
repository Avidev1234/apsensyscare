export const GenerateEmailForGaustOrder = (cart, gaust_address) => {
    let products = []
   
    const order_address = `<tr>
      <td style="border: 1px solid #ddd;">${gaust_address[0].name}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].phone}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].email}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].state}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].city}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].pincode}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].area}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].house}</td>
      <td style="border: 1px solid #ddd;">${gaust_address[0].address_type}</td>
     </tr>`
    const message = products.map((val) => {
        return `<tr>
      <td style="border: 1px solid #ddd;">${val.brand} ${val.name}</td>
      <td style="border: 1px solid #ddd;">${val.size}</td>
      <td style="border: 1px solid #ddd;">${val.price}</td>
      <td style="border: 1px solid #ddd;">${val.quantity}</td>
     </tr>`
    });
    const message_table = `<table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;"><tr><th style="background-color:green;border: 1px solid #ddd;">Name</th><th style="background-color:green;border: 1px solid #ddd;">Size</th><th style="background-color:green;border: 1px solid #ddd;">Price</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Quantity</th></tr>${message.join("")}</table>`
    const adddressTable = `<table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;"><tr><th style="background-color:green;border: 1px solid #ddd;">Name</th><th style="background-color:green;border: 1px solid #ddd;">Phone</th><th style="background-color:green;border: 1px solid #ddd;">Email</th><th style="background-color:green;border: 1px solid #ddd;">State</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">City</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Pincode</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Area</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">House</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Address Type</th></tr>${order_address}</table>`

    // program to generate random strings

    //const result = `ACS${Math.random().toString(36).substring(2, 9).toUpperCase()}${sessionStorage.getItem('___user')}`;
    ////console.log(result);
    ////console.log(products)
    const orderItem = {
        user_id: '',
        order_d: '',
        products: message_table,
        address: adddressTable,
        payment_method: 'case',
        total_order: cart.cartTotalQuantity,
        order_status: 'ordered',
        total_amount: ''
    }
    return orderItem;
}