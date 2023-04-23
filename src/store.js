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
    title: "fifi",
    brand: "Fancy Brand",
    price: "$19.99",
    oldprice: "$39.99",
    img: "https://i.pinimg.com/564x/f7/d1/3a/f7d13acad6cb754438fd5a9da3d78818.jpg",
    imgalt: "Photo by Austin Wade",
  },
  {
    id: 2,
    title: "Cool Outfit",
    brand: "Cool Brand",
    price: "$29.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/20/83/06/208306ef7f5659a46c2b1c592e7851d2.jpg",
  },
  {
    id: 3,
    title: "Funky Outfit",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/f5/b3/b7/f5b3b7a64c253f882bfdd4337c7721ac.jpg",
  },
  {
    id: 4,
    title: "Tunky Outfit",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Funky Outfit",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/a2/ea/98/a2ea989a1bc308ca8dfe9b2b30e93918.jpg",
  },
  {
    id: 6,
    title: "Tunky Outfit",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/4d/d3/de/4dd3debfeaf25d0e935505eb81eb288f.jpg",
  },
  {
    id: 7,
    title: "Funky Outfit",
    brand: "Funky Brand",
    price: "$39.99",
    oldprice: "",
    img: "https://i.pinimg.com/750x/da/1f/c9/da1fc9118f89831b25a0e5303350edc7.jpg",
  },
  {
    id: 8,
    title: "Tunky Outfit",
    brand: "Tunky Brand",
    price: "$49.99",
    oldprice: "",
    img: "https://i.pinimg.com/564x/05/fb/84/05fb8402f6b786dde6c69d09e545c8b0.jpg",
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
