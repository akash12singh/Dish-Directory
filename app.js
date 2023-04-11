const menu = [
  {
    id: 1,
    title: "Chole Bhature",
    category: "breakfast",
    price: 120,
    img: "./images/item-1.jpg",
    desc: `Introducing our signature dish - Chole Bhature! This classic North Indian delicacy is a must-try for all food lovers out there. Our expert chefs have perfected the recipe to bring you the most flavorful and satisfying experience.`,
  },
  {
    id: 2,
    title: "PANEER PAKODA 2pc",
    category: "breakfast",
    price: 110,
    img: "./images/item-2.jpeg",
    desc: `The crispy exterior of the paneer pakoda gives way to a soft and succulent interior that is bursting with flavors. This dish is served with a side of tangy mint chutney and sliced onions, making it a perfect snack for any occasion.`,
  },
  {
    id: 3,
    title: "Matar Kulcha",
    category: "breakfast",
    price: 160,
    img: "./images/item-3.jpeg",
    desc: `Matar Kulcha! This North Indian delicacy is made with a flavorful mixture of spiced and mashed white peas, served alongside soft and fluffy kulchas (leavened bread).`,
  },
  {
    id: 4,
    title: "Special Masala Dosa",
    category: "lunch",
    price: 250,
    img: "./images/item-4.jpg",
    desc: `Masala Dosa is made with a gluten-free batter of fermented rice and lentils, spread thinly on a hot griddle and filled with a mouth-watering mixture of potatoes and spices.`,
  },
  {
    id: 5,
    title: "Idli Sambhar",
    category: "lunch",
    price: 220,
    img: "./images/item-5.jpeg",
    desc: `Delight in the taste of our classic Idli Sambhar - soft steamed rice-lentil cakes served with a tangy lentil soup. Vegan and gluten-free!`,
  },
  {
    id: 6,
    title: "Panner Amritsari",
    category: "lunch",
    price: 230,
    img: "./images/item-6.jpg",
    desc: `Experience the explosion of flavors and textures in every bite of Paneer Amritsari - the soft and creamy paneer inside and the crispy outer layer, combined with the spices and chutney, will surely leave you craving for more!`,
  },
  {
    id: 7,
    title: "Dal Makhani",
    category: "dinner",
    price: 395,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Rajma Chawal",
    category: "dinner",
    price: 250,
    img: "./images/item-8.jpeg",
    desc: `Indulge in our creamy and flavorful Dal Makhani - a popular North Indian dish made with black lentils, kidney beans, and aromatic spices.`,
  },
  {
    id: 9,
    title: "Special Veg Thali",
    category: "dinner",
    price: 280,
    img: "./images/item-9.jpeg",
    desc: `Experience a variety of flavors with our Special Veg Thali - a platter of delicious vegetarian dishes, served with rice, bread, and dessert.`,
  },
  {
    id: 10,
    title: "Pani Puri",
    category: "snacks",
    price: 145,
    img: "./images/item-10.jpg",
    desc: `Get ready for a burst of flavors with our Pani Puri - crispy puris filled with spicy potatoes and tangy tamarind water. A popular Indian street food!`,
  },
  {
    id: 11,
    title: "Grilled Sandwich With Chips",
    category: "snacks",
    price: 125,
    img: "./images/item-11.jpeg",
    desc: `Try our Grilled Sandwich with Chips - a delicious sandwich stuffed with veggies, cheese, and mayo, served with crispy potato chips. Perfect for a quick bite!`,
  },
  {
    id: 12,
    title: "Aloo Pyaz Parantha",
    category: "snacks",
    price: 128,
    img: "./images/item-12.jpeg",
    desc: `Enjoy our Aloo Pyaz Parantha - a classic North Indian flatbread stuffed with spiced potatoes and onions, cooked to crispy perfection.`,
  },
];
const filterBtns =document.querySelectorAll('.filter-btn');

const sectionCenter = document.querySelector(".section-center");

window.addEventListener('DOMContentLoaded',function(){
  displayMenuItems(menu);
});
//filter items
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
    // console.log(e.currentTarget.dataset.id);{
      if(menuItem.category === category){
        return menuItem;
      }
  });
  if(category === 'all'){
    displayMenuItems(menu);
  }
  else{
    displayMenuItems(menuCategory);
  }
});
  });

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    // console.log(item);
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">&#x20b9;${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML =  displayMenu;
  // console.log(displayMenu);
};
{/* <p>&#x20b9; </p> */}