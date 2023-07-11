# Car Showcase
> This page lets you browse a car catalogue provided by the "Cars by API-Ninjas" API from RapidAPI. You can filter the cars based on several criterias such as manufacturer, model, fuel and more.



## General Information
- This project is based on a tutorial from [Javascript Mastery](https://www.youtube.com/@javascriptmastery) 
- I undertook this project to get familiar with working in a NextJS application to experiment with the new app router and server-side rendering
- I also wanted to try out the HeadlessUI component library by integrating components such as Dialog, Transition and ComboBox
- This project also gave me the chance to solidify my knowledge in applying TailwindCS for styling and TypeScript for typing.



## Technologies Used
- React 18.2.0
- Typescript 5.1.3
- NextJS 13.4.7
- HeadlessUI 1.7.15
- TailwindCSS 3.3.2



## Features
- Browser through a catalogue of cars
- Search for specific cars
- Filter the results by several criteria
- Read more information about specific cars in modals



## Screenshots
![Example screenshot](https://i.ibb.co/w01Tx1t/carshowcase.jpg)



## Demo
Live demo [_here_](https://jsm-car-showcase-chi.vercel.app/).



## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Navigate to the project folder in the terminal and install the necessary NPM dependencies
```
npm install
```
3. In .env.local assign an API key (provided by [Cars by API-Ninjas](https://api-ninjas.com/api/cars) to the NEXT_PUBLIC_RAPID_API_KEY environment variable.
4. Run the app typing
```
npm run dev
```
in your terminal and visit localhost:3000 in your browser.



## Learnings
- Setting up an app using NextJS, Typescript and TailwindCSS
- Using Next.js Image components
- Differentiating between server and client components ("use client"). Using "asynchronous" components
- Adjusting metadata in Layout.tsx
- Integrating aand styling Headless UI components such as Transition, Combobox and Modal
- Manipulation of URL parameters to benefit from Server-Side Rendering
- Implementing Pagination
- Handling environment variables in NextJS applications
- Transforming the app to pure client-side rendering because of little bugs with regards to scrolling using server components. It helped in understanding the specific differences and the trade-offs between Server-side and Client-side rendering.



## Project Status
The project is basically finished. I may revisit it in the future to implement a process of leasing cars including the handling of authentication and payments in a NextJS application. I may also add the ability to add cars to the catalogue.  



## Acknowledgements
- This project is based on a [tutorial](https://www.youtube.com/watch?v=pUNSHPyVryU) from [Javascript Mastery](https://www.youtube.com/@javascriptmastery).



