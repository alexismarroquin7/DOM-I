const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAV ITEMS
const nav_items = document.getElementsByTagName('a');

nav_items[0].textContent = siteContent["nav"]["nav-item-1"];
nav_items[1].textContent = siteContent["nav"]["nav-item-2"];
nav_items[2].textContent = siteContent["nav"]["nav-item-3"];
nav_items[3].textContent = siteContent["nav"]["nav-item-4"];
nav_items[4].textContent = siteContent["nav"]["nav-item-5"];
nav_items[5].textContent = siteContent["nav"]["nav-item-6"];

// DOM IS AWESOME
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent["cta"]["h1"];

// BUTTON BELOW 'DOM IS AWESOME'
const myBtn = document.querySelector('.cta-text button');
myBtn.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const topContent = document.querySelector('.top-content');


// HEADERS
const myTextContent = document.querySelectorAll('.text-content h4');
myTextContent[0].textContent = siteContent['main-content']['features-h4'];
myTextContent[1].textContent = siteContent['main-content']['about-h4'];
myTextContent[2].textContent = siteContent['main-content']['services-h4'];
myTextContent[3].textContent = siteContent['main-content']['product-h4'];
myTextContent[4].textContent = siteContent['main-content']['vision-h4'];

const contactSection = document.querySelector('.contact');
// myTextContent[5].textContent = siteContent['contact']['contact-h4'];
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

// P Tags
const myPTags = document.querySelectorAll('.text-content p');
// featuresP.textContent = siteContent['main-content']['features-content'];
// const featuresCont = topContent.firstChild;
// const featuresP = featuresCont.lastChild;
// featuresP.textContent = siteContent['main-content']['features-content'];
myPTags[0].textContent = siteContent['main-content']['features-content'];
myPTags[1].textContent = siteContent['main-content']['about-content'];
myPTags[2].textContent = siteContent['main-content']['services-content'];
myPTags[3].textContent = siteContent['main-content']['product-content'];
myPTags[4].textContent = siteContent['main-content']['vision-content'];


console.log(myPTags);

// MIDDLE IMG

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log(middleImg);

// CONTACT CONTENT
const contactPTags = document.querySelectorAll('.contact p');
contactPTags[0].textContent = siteContent['contact']['address'];
contactPTags[1].textContent = siteContent['contact']['phone'];
contactPTags[2].textContent = siteContent['contact']['email'];

console.log(contactPTags);

// FOOTER P
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];