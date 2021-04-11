'use strict';

// ************************************************ Seattle-Sales ************************************************
const seattle = {
  cookiesName:'Seattle Sales :',
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: 6.3,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  cookiesPurchasedPerHour:[],
  totalCookiesPurchased : 0,
  randomNumber: function () {
    for (let i = 0; i < this.workHours.length ; i++) {
      this.customersPerHour.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));
    }
  },
  cookiesPurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
      this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }
  },
  viewSales: function () {
    let salesCookies = document.getElementById('salesCookies');
    let div = document.createElement('div');
    salesCookies.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = this.cookiesName;
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${this.workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
seattle.randomNumber();
// console.log(seattle.customersPerHour);
seattle.cookiesPurchased();
// console.log(seattle.cookiesPurchasedPerHour);
// console.log(seattle.totalCookiesPurchased);
seattle.viewSales();

// ************************************************ Tokyo-Sales ************************************************
const tokyo = {
  cookiesName:'Tokyo Sales :',
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  cookiesPurchasedPerHour:[],
  totalCookiesPurchased : 0,
  randomNumber: function () {
    for (let i = 0; i < this.workHours.length ; i++) {
      this.customersPerHour.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));
    }
  },
  cookiesPurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
      this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }
  },
  viewSales: function () {
    let salesCookies = document.getElementById('salesCookies');
    let div = document.createElement('div');
    salesCookies.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = this.cookiesName;
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${this.workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
tokyo.randomNumber();
// console.log(tokyo.customersPerHour);
tokyo.cookiesPurchased();
// console.log(tokyo.cookiesPurchasedPerHour);
// console.log(tokyo.totalCookiesPurchased);
tokyo.viewSales();

// ************************************************ Dubai-Sales ************************************************
const dubai = {
  cookiesName:'Dubai Sales :',
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: 3.7,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  cookiesPurchasedPerHour:[],
  totalCookiesPurchased : 0,
  randomNumber: function () {
    for (let i = 0; i < this.workHours.length ; i++) {
      this.customersPerHour.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));
    }
  },
  cookiesPurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
      this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }
  },
  viewSales: function () {
    let salesCookies = document.getElementById('salesCookies');
    let div = document.createElement('div');
    salesCookies.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = this.cookiesName;
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${this.workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
dubai.randomNumber();
// console.log(dubai.customersPerHour);
dubai.cookiesPurchased();
// console.log(dubai.cookiesPurchasedPerHour);
// console.log(dubai.totalCookiesPurchased);
dubai.viewSales();

// ************************************************ Paris-Sales ************************************************
const paris = {
  cookiesName:'Paris Sales :',
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: 2.3,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  cookiesPurchasedPerHour:[],
  totalCookiesPurchased : 0,
  randomNumber: function () {
    for (let i = 0; i < this.workHours.length ; i++) {
      this.customersPerHour.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));
    }
  },
  cookiesPurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
      this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }
  },
  viewSales: function () {
    let salesCookies = document.getElementById('salesCookies');
    let div = document.createElement('div');
    salesCookies.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = this.cookiesName;
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${this.workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
paris.randomNumber();
// console.log(paris.customersPerHour);
paris.cookiesPurchased();
// console.log(paris.cookiesPurchasedPerHour);
// console.log(paris.totalCookiesPurchased);
paris.viewSales();

// ************************************************ Lima-Sales ************************************************
const lima = {
  cookiesName:'Lima Sales :',
  minCustomer: 2,
  maxCustomer: 16,
  avgCustomer: 4.6,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  cookiesPurchasedPerHour:[],
  totalCookiesPurchased : 0,
  randomNumber: function () {
    for (let i = 0; i < this.workHours.length ; i++) {
      this.customersPerHour.push( Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) + this.minCustomer ));
    }
  },
  cookiesPurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
      this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }
  },
  viewSales: function () {
    let salesCookies = document.getElementById('salesCookies');
    let div = document.createElement('div');
    salesCookies.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent = this.cookiesName;
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < this.customersPerHour.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${this.workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
lima.randomNumber();
// console.log(lima.customersPerHour);
lima.cookiesPurchased();
// console.log(lima.cookiesPurchasedPerHour);
// console.log(lima.totalCookiesPurchased);
lima.viewSales();
