function addOrder() {
  const form = document.createElement("div");
  form.setAttribute("class", "form");
  const order = document.getElementById("orders");
  order.appendChild(form);
  form.innerHTML = `<table class="order-table">
  <thead>  
    <tr>
      <td>
        <select class="order-table-body-input category" id="category" required>
          <option value="">Category</option>
          <option value="Starters">Starter</option>
          <option value="Main Course">Main Course</option>
          <option value="Beverages">Beverage</option>
          <option value="Desserts">Dessert</option>
        </select>
      </td>
      <td>
        <select class="order-table-body-input item" id="item" required onfocus="showItem()">
          <option value="">Item</option>
        </select>
      </td>
      <td>
        <input type="number" readonly class="order-table-body-input price" id="price" onfocus="showPrice()" required>
      </td>
      <td>
        <input type="number" class="order-table-body-input quantity" id="quantity" onkeyup="showItemAmount(); showAmount()" required>
      </td>
      <td>
        <input type="number" readonly class="order-table-body-input amounts" id="amount" onfocus="">
      </td>
    </tr>
</thead>
</table>`;
}

function showItem() {
  const categories = document.getElementsByClassName("category");
  const items = document.getElementsByClassName("item");

  for (let i = 0; i < categories.length; i++) {
    let category = categories[i].value;
    let item = items[i];
    if (category === "Starters") {
      item.innerHTML = `
    <option value="Dough Balls Doppio">Dough Balls Doppio</option>
    <option value="Mix Salad Bowl">Mix Salad Bowl</option>
    <option value="Garlic Bread Mozzarella">Garlic Bread Mozzarella</option>
    <option value="Veg Wrap">Veg Wrap</option>
    <option value="Spinach and Artichoke Tortilla Crisp">Spinach and Artichoke Tortilla Crisp</option>
    <option value="Mini Vegetable Lasagna">Mini Vegetable Lasagna</option>
    <option value="Potato Wedges">Potato Wedges</option>
    <option value="Emilgrana & Mushroom Dip">Emilgrana & Mushroom Dip</option>`
    }
    else if (category === "Main Course") {
      item.innerHTML = `
    <option value="Fruit Pizza">Fruit Pizza</option>
    <option value="Combo of 2 Veg Pizzas">Combo of 2 Veg Pizzas</option>
    <option value="Risotto Con Funghi Veg">Risotto Con Funghi Veg</option>
    <option value="Penne con Peppadew">Penne con Peppadew</option>
    <option value="Dan Dan Noodles">Dan Dan Noodles</option>
    <option value="Mexican Delight Pizza">Mexican Delight Pizza</option>
    <option value="Spaghetti Aglio e Olio">Spaghetti Aglio e Olio</option>
    <option value="Pomodoro Pesto Pizza By the Slice">Pomodoro Pesto Pizza By the Slice</option>
    <option value="Cheese Burst Pizza">Cheese Burst Pizza</option>
    <option value="Fresh Veggi Special Pizza">Fresh Veggi Special Pizza</option>`
    }
    else if (category === "Beverages") {
      item.innerHTML = `
    <option value="Berry Blast">Berry Blast</option>
    <option value="Oreo Monster Shake">Oreo Monster Shake</option>
    <option value="Classic Mojito">Classic Mojito</option>
    <option value="Water Melon Ice Tea">Water Melon Ice Tea</option>
    <option value="Diet Pepsi">Diet Pepsi</option>`
    }
    else if (category === "Desserts") {
      item.innerHTML = `
    <option value="Chocolate Cheesecake">Chocolate Cheesecake</option>
    <option value="Brownie">Brownie</option>`
    }
  }
}

function showPrice() {
  const items = document.getElementsByClassName("item");
  const prices = document.getElementsByClassName("price");
  for (let i = 0; i < items.length; i++) {
    let item = items[i].value;
    let price = prices[i];
    if (item === "Dough Balls Doppio") {
      price.value = 5.95;
    }
    else if ((item === "Mix Salad Bowl") || (item === "Fresh Veggi Special Pizza")) {
      price.value = 4;
    }
    else if (item === "Garlic Bread Mozzarella") {
      price.value = 3.12;
    }
    else if (item === "Veg Wrap") {
      price.value = 9.5;
    }
    else if (item === "Spinach and Artichoke Tortilla Crisp") {
      price.value = 5.24;
    }
    else if (item === "Mini Vegetable Lasagna") {
      price.value = 1.53;
    }
    else if (item === "Potato Wedges") {
      price.value = 2.1;
    }
    else if (item === "Emilgrana & Mushroom Dip") {
      price.value = 4.35;
    }
    else if (item === "Fruit Pizza") {
      price.value = 5;
    }
    else if (item === "Combo of 2 Veg Pizzas") {
      price.value = 5.04;
    }
    else if (item === "Risotto Con Funghi Veg") {
      price.value = 6.58;
    }
    else if ((item === "Penne con Peppadew") || (item === "Spaghetti Aglio e Olio")) {
      price.value = 9;
    }
    else if (item === "Dan Dan Noodles") {
      price.value = 3.99;
    }
    else if (item === "Mexican Delight Pizza") {
      price.value = 4.2;
    }
    else if (item === "Pomodoro Pesto Pizza By the Slice") {
      price.value = 15;
    }
    else if (item === "Cheese Burst Pizza") {
      price.value = 12;
    }
    else if (item === "Berry Blast") {
      price.value = 1.72;
    }
    else if (item === "Oreo Monster Shake") {
      price.value = 3.78;
    }
    else if (item === "Classic Mojito") {
      price.value = 3.44;
    }
    else if (item === "Water Melon Ice Tea") {
      price.value = 2.5;
    }
    else if (item === "Diet Pepsi") {
      price.value = 1;
    }
    else if (item === "Chocolate Cheesecake") {
      price.value = 7.95;
    }
    else if (item === "Brownie") {
      price.value = 2.52;
    }
  }
}

function showItemAmount() {
  const prices = document.getElementsByClassName("price");
  const quantities = document.getElementsByClassName("quantity");
  const amounts = document.getElementsByClassName("amounts");
  for (let i = 0; i < prices.length; i++) {
    let price = Number(prices[i].value);
    let quantity = Number(quantities[i].value);
    let amount = amounts[i];
    amount.value = price * quantity;
  }
}

function showAmount() {
  const amounts = document.getElementsByClassName("amounts");
  const totalAmount = document.getElementById("total-amount");
  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    total = Math.round((total + Number(amounts[i].value) + Number.EPSILON) * 100) / 100;
  }
  totalAmount.innerText = total;
}

function showOrder() {
  const id = document.getElementById("order-id").value;
  const name = document.getElementById("customer-name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("address").value;

  const totalAmount = document.getElementById("total-amount").innerText;

  alert(
    `Order Id :${id} \n Customer Name: ${name} \n Email id: ${email} \n Contact Number: ${contact} \n Order Date: ${date} \n Address:  ${address} \n Total Bill: ${totalAmount}`
  );

  form.reset();
}
