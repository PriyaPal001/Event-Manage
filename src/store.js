import { writable } from "svelte/store";

// Layout.svelte :
import Logo from "$lib/calendar.png";
export let layoutData = writable({
  imgSrc: Logo,
  title: "Event Hub",
  navs: [
    {
      nv: "Home",
      link: "/",
    },
    {
      nv: "Events",
      link: "/products",
    },
    {
      nv: "About Us",
      link: "/about",
    },
    {
      nv: "Organize",
      link: "/organize",
    },
  ],
});
// Footer Page :
export let footerData = writable({
  footerTitle: "Event Hub",
  footerLink: "eventhub",
  facebookLink: "/",
  twitterLink: "/",
  instagramLink: "/",
  linkedinLink: "/",
});
// Main page :
export let mainPageData = writable([
  {
    id: 1,
    metaTitle: "Event Management",
    metaDesc: "Website Started Created by Sikandar Bhide",
    metaImg: Logo,
  },
  {
    // +page.svelte data
    id: 2,
    title: "Welcome to Event Hub",
    subtitle: "",
    subtext:
      "Build & Organize High Quality Events, Our focus is to Create Auspicious Vibe for Customers",
    btn1: "Events",
    btn2: "About",
  },
  {
    // +page.svelte data  <PageProd />
    id: 3,
    title: "Specials 💖",
    img1: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg?w=996&t=st=1682279704~exp=1682280304~hmac=4c3460706d2cf6843f42e7f331b2f80f20f97064274ddc0dee3ebec811128379",
    img2: "https://img.freepik.com/premium-photo/wedding-table-set-up-boho-style-with-pampas-grass-greenery-soft-focus_547542-1935.jpg?w=996",
    btn: "View All",
    text: "Organize Events as per needs, Recent Weddings & Party held in Lonavala",
  },
  {
    // +page.svelte data  <ImgGallery />
    id: 4,
    img1: "https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18744.jpg?w=996&t=st=1682280281~exp=1682280881~hmac=5ade5f2320ed92a237b428866512a6aee49f624e01a3bb0785ca1a8a815f76c4",
    img2: "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?w=996&t=st=1682280372~exp=1682280972~hmac=ee49d4cde6a8e7a0da2627931f897e66df9c7a88ff2f15bf39c8b69181afec54",
    img3: "https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?w=996&t=st=1682280468~exp=1682281068~hmac=f27e8e38966b25e9db357b5f6c148faaeea6896668e6bb431c09fb2128eed9b7",
    img4: "https://img.freepik.com/free-photo/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons_8353-8415.jpg?w=996&t=st=1682280651~exp=1682281251~hmac=b9c470b4951f3d32b5f172419312f1d5e7ed7eff6a8661ee84aaf11d007270d4",
    img1text: "Classic",
    img2text: "Luxurious ",
    img3text: "Successful Weddings",
    img4text: "Romance",
  },
  {
    // +page.svelte data   <FeaturesPage />
    id: 5,
    title: "Facilities & Services",
    subtitle:
      "Our Team Provide Valuable Servies to Our Customers, including Free Wi-fi, AC/Non-AC, Extended Timmings as per Need and  Parkings... ",
    featuresDesc: [
      {
        title: "Free Wi-fi",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },

      {
        title: "Parking Servies ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        title: "AC & Non AC",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        title: "8+ Cities",
        description:
          "Cities inlcuding : Mumbai, Navi Mumbai , Goa, Nashik, Banglore, Pune and future Cities : Kerla, Delhi, Odisha",
      },
      {
        title: "Cash & Cash Less Payments",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
      {
        title: "Wonderful Decoration + Food",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
      },
    ],
    btnText: "Organize Events",
  },
  {
    // +page.svelte data   <FeaturesPage />
    id: 6,
    title: "Trusted by Thousands",
    subtitle:
      "We are meant to Build Happiest & Succesful Events",
    stats: [
      {
        title: "Total Events",
        value: "3,300+",
      },
      {
        title: "Prizes",
        value: "60+",
      },
      {
        title: "Cities",
        value: "8+",
      },
    ],
  },
]);
// Product Page :
export let productsInfo = writable({
  id: 1,
  title: "  Events",
  subtext:
    "",
  btn: "Buy Now", // for [Product Page]
});
export let productData = writable([
  {
    id: 1,
    title: "Wedding",
    brand: "Fancy Brand",
    price: "$19.99",
    oldprice: "$39.99",
    img: "https://img.freepik.com/free-photo/luxury-wedding-ceremony_624325-1792.jpg?w=996&t=st=1682285547~exp=1682286147~hmac=5d23a9df8cac20bbb4d3316590a87ae76c62f18290a844f5bf9a19c51e2fe14d",
    imgalt: "Photo by Austin Wade",
  },
  {
    id: 2,
    title: "Romantic Engagement",
    brand: "Cool Brand",
    price: "$29.99",
    oldprice: "",
    img: "https://img.freepik.com/free-photo/yellow-light-garlands-hang-dinner-tables-decorated_8353-800.jpg?w=360&t=st=1682285565~exp=1682286165~hmac=07685ddb32ba7f767e0c4f05fa66737f81edc7cde537b850d6ec6d7223ef9887",
  },
  {
    id: 3,
    title: "Professional Event",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://img.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_53876-101865.jpg?w=1060&t=st=1682285705~exp=1682286305~hmac=94302c57839566a923750d8904dff8712a7e30aee780cd6646c59a884ba5a4fe",
  },
  {
    id: 4,
    title: "Celebration Stuff",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?w=996&t=st=1682285850~exp=1682286450~hmac=b16ceeabecbe1e196455e0c521bf3d49738bfd815c7620aba5f13d9f383402ad",
  },
  {
    id: 5,
    title: "Goa Yufu",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/d7/16/a5/d716a553555a6e4c330bb672f9ad2a13.jpg",
  },
  {
    id: 6,
    title: "Company Meet",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/f3/28/ac/f328acadb73c977e6de7291abeed1b73.jpg",
  },
  {
    id: 7,
    title: "Association Conference",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/66/eb/7d/66eb7d453a775a2f9213786d521f8968.jpg",
  },
  {
    id: 8,
    title: "Luxurious Wedding",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/99/b0/24/99b024a8699ff4028151c7f6cb313398.jpg",
  },
]);

// About Page :
export let aboutInfo = writable([
  {
    id: 1,
    smltitle: "Introducing",
    title: "Revolutionary way to build the web",
    subtitle:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
  },
  {
    id: 2,
    title: "About us",
    subtext:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated",
    liData: [
      "This is a section of some simple filler text",
      "Also known as placeholder text",
      "It shares some characteristics of a real written text",
    ],
    quote:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated",
    abtImg:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350",
  },
  {
    // Team Members :
    id: 3,
    title: "Our Team by the numbers",
    subtext:
      "We are a small team of passionate people who love what we do. We are always looking for new talent to join our team.",
    stats: [
      {
        title: "100",
        text: "People",
      },
      {
        title: "500+",
        text: "People",
      },
      {
        title: "1000+",
        text: "Customers",
      },
      {
        title: "A couple",
        text: "Coffee breaks",
      },
    ],
  },
]);
