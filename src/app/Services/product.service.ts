import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products= [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=cc37ced2e51f9f58430dfed1192067cd",
      name: "Learn Vue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 50,
      inStock: 3
    },

    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=506cdfe576a1dd5545a2850ac143b2be",
      name: "Vue for Beginners",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 150,
      inStock: 1
    },

    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c9cebb448c07815ac2a1c4141b4cdd18",
      name: "Advanced Vue Development",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 180,
      inStock: 10
    },

    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=5a819fb0cd534e9c1af5d38c4983eeb3",
      name: "ES6 for Everybody",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 40,
      inStock: 8
    },

    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=1174b1ff26fccde5cdfda64087bfc6ac",
      name: "Advanced JavaScript",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 99,
      inStock: 20
    },

    {
      id: 6,
      imgSrc:
        "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=070ca0d38724c4382129ae8e0004a5ba",
      name: "Vue and Vuex",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nobis minus! Dicta perferendis rem pariatur sapiente nobis.",
      price: 199,
      inStock: 0
    }
  ];
  constructor() { }
}
