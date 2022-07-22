# Ecommerse-Frontend---Angular

## Project Overview

---

### Project Description

#### Motivation

This project was built for an udacity project submision, I wanted to build a minimalistic ecommerse experience while still building the frontend with scalability in mind.

#### Build Status

- This project is dependent on https://github.com/XsAndre-L/Storefront-Backend---Express.git to be running on the same computer on port 3000.
- The sign up page currently show no error messages but the login page will show error messages on incorrect input completion.  
  ![Image](/src/assets/screenshots/Input%20Error%20Messages.png)
- Feedback is provided when Item is removed from cart ( a message saying 'Item Removed' is displayed next too the Cart button top left)  
  ![Image](/src/assets/screenshots/Item%20Removed%20Feedback%20Message.png)
- The descriptions on the product info page won't show up because the backend does not contain project descriptions, altho the frontend code does implement the description.  
  ![Image](/src/assets/screenshots/Item%20Description%20in%20code.png)
- Removing products from cart page does work as far as my testing extends.
- after successfull purchase a checkout success page does show up.
  ![Image](/src/assets/screenshots/Order%20Success%20Page.png)

#### Framework

This frontend project uses The Angular Framework.

#### Features

Login page
Signup page
hover cart preview
product category filter
user details page
orders page

An ecommerse frontend including a store page, user account actions such as account creation and user authentication,
user details page containing a link to all user orders.

### Routes

Products - `/`
Product Categories - `/?category=fruit` / `/?category=vegetables`

User Routes:
Login - `/login`
SignUp - `/signup`
Profile - `/user`
Cart - `/cart`
Cart Checkout - `/checkout`
Orders - `/orders`

## Installation

---

Step 1:  
Clone Repository  
`git clone https://github.com/XsAndre-L/Ecommerse-Frontend---Angular.git`

Step 2:  
Install Dependencies

- Inside cloned directory run:  
  `npm i`

Step 3:  
Run the project  
`ng serve`

Step 4:  
Open Browser
http://localhost:4200/
