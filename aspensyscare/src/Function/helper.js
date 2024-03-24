export const Genaratemail = async ({ product, address, payment }) => {

    const order_address = `<tr>
      <td style="border: 1px solid #ddd;">${address[0].name}</td>
      <td style="border: 1px solid #ddd;">${address[0].contact}</td>
      <td style="border: 1px solid #ddd;">${address[0].email ? address[0].email : "---"}</td>
      <td style="border: 1px solid #ddd;">${address[0].state}</td>
      <td style="border: 1px solid #ddd;">${address[0].city}</td>
      <td style="border: 1px solid #ddd;">${address[0].pincode}</td>
      <td style="border: 1px solid #ddd;">${address[0].area_landmark}</td>
      <td style="border: 1px solid #ddd;">${address[0].house_flat_office}</td>
      <td style="border: 1px solid #ddd;">${address[0].address_type}</td>
     </tr>`
    const message = product.map((val) => {
        return `<tr>
      <td style="border: 1px solid #ddd;">${val.order_id}</td>
      <td style="border: 1px solid #ddd;">${val.product_name}</td>
      <td style="border: 1px solid #ddd;">${val.ordered_bag_size}</td>
      <td style="border: 1px solid #ddd;">${val.ordered_price}</td>
      <td style="border: 1px solid #ddd;">${val.quantity}</td>
      <td style="border: 1px solid #ddd;">${payment}</td>
     </tr>`
    });
    const message_table = `<table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;"><tr><th style="background-color:green;border: 1px solid #ddd;">Order ID</th><th style="background-color:green;border: 1px solid #ddd;">Name</th><th style="background-color:green;border: 1px solid #ddd;">Size</th><th style="background-color:green;border: 1px solid #ddd;">Price</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Quantity</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Payment Status</th></tr>${message.join("")}</table>`
    const adddressTable = `<table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;"><tr><th style="background-color:green;border: 1px solid #ddd;">Name</th><th style="background-color:green;border: 1px solid #ddd;">Phone</th><th style="background-color:green;border: 1px solid #ddd;">Email</th><th style="background-color:green;border: 1px solid #ddd;">State</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">City</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Pincode</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Area</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">House</th><th style="background-color:green;background-color:green;border: 1px solid #ddd;">Address Type</th></tr>${order_address}</table>`

    // program to generate random strings

    //const result = `ACS${Math.random().toString(36).substring(2, 9).toUpperCase()}${sessionStorage.getItem('___user')}`;
    ////console.log(result);
    ////console.log(products)
    const orderItem = {
        products: message_table,
        address: adddressTable,
    }
    return orderItem;
}

export const setLoginSession = (user) => {
    var expires = new Date();
    sessionStorage.setItem('userexpired', JSON.stringify(expires));
    sessionStorage.setItem("LoginSuccess", true);
    sessionStorage.setItem("___user", user);
}