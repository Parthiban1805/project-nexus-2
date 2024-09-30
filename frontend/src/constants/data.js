import images from './images';

const wines = [
  {  
    title: 'Orange Juice',  
    price: '₹400',  
    tags: 'Freshly squeezed | 250 ml',  
  },  
  {  
    title: 'Apple Juice',  
    price: '₹400',  
    tags: 'Freshly pressed | 250 ml',  
  },  
  {  
    title: 'Carrot Juice',  
    price: '₹500',  
    tags: 'Organic carrots | 250 ml',  
  },  
  {  
    title: 'Pineapple Juice',  
    price: '₹500',  
    tags: 'Freshly blended | 250 ml',  
  },  
  {  
    title: 'Mixed Berry Juice',  
    price: '₹600',  
    tags: 'Strawberries, blueberries, raspberries | 250 ml',  
  },  
];

const cocktails = [
  {  
    title: 'Chocolate Lava Cake',  
    price: '₹600',  
    tags: 'Rich chocolate cake | Vanilla ice cream',  
  },  
  {  
    title: 'Tiramisu',  
    price: '₹700',  
    tags: 'Coffee-soaked ladyfingers | Mascarpone cheese',  
  },  
  {  
    title: 'Cheesecake',  
    price: '₹500',  
    tags: 'Creamy cheesecake | Graham cracker crust',  
  },  
  {  
    title: 'Crème Brûlée',  
    price: '₹800',  
    tags: 'Vanilla custard | Caramelized sugar topping',  
  },  
  {  
    title: 'Fruit Tart',  
    price: '₹600',  
    tags: 'Seasonal fruits | Pastry cream | Tart shell',  
  },
];

const awards = [
  {  
    imgUrl: images.award01,  
    title: 'Best Dessert Menu',  
    subtitle: 'Awarded for exceptional dessert offerings.',  
  },  
  {  
    imgUrl: images.award02,  
    title: 'Top Juice Bar',  
    subtitle: 'Recognized for fresh and delicious juices.',  
  },  
  {  
    imgUrl: images.award03,  
    title: 'Outstanding Service',  
    subtitle: 'Celebrated for exceptional customer service.',  
  },  
  {  
    imgUrl: images.award03,  
    title: 'Best Atmosphere',  
    subtitle: 'Honored for a unique and inviting ambiance.',  
  },  
];


const data = { wines, cocktails, awards };

export default data;
