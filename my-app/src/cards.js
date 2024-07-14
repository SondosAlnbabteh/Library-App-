// src/Cards.js

import React, { useEffect, useState } from "react";

function Cards() {
   
    const [person, setPerson] = useState({
        books: [
            {
                id: 1,
                title: "مقدمة ابن خلدون",
                author: "ابن خلدون",
                isbn: "1289499030"
            },
            {
                id: 2,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 3,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 4,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 5,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 6,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 7,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 8,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            }
        ]
    });

    useEffect(() => {
        // Using forEach for side-effects, e.g., logging each book's title
        person.books.forEach(book => {
            console.log(book.id);
        });
    }, [person.books]);

    return (
        <main>
        <ul className="cards grid grid-cols-auto-fit min-w-[300px] gap-8 m-16 p-0 list-none">
          {person.books.map((book, index) => (
            <li key={book.id}>
              <a href="#" className="relative block h-full overflow-hidden no-underline card rounded-3xl">
                <img src="https://i.imgur.com/oYiTqum.jpg" className="w-full h-auto card__image" alt="" />
                <div className="absolute bottom-0 left-0 right-0 z-10 transition-transform duration-200 ease-in-out translate-y-full bg-white card__overlay rounded-3xl">
                  <div className="flex items-center gap-8 p-8 transition-transform duration-200 ease-in-out translate-y-full bg-white card__header rounded-t-3xl">
                    <svg className="absolute right-0 z-10 w-20 h-20 card__arc bottom-full" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img className="flex-shrink-0 w-12 h-12 rounded-full card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title text-lg text-[#6A515E] m-0 mb-1">{book.title}</h3>
                      <span className="card__status text-sm text-[#D7BDCA]">Book number {index + 1}</span>
                    </div>
                  </div>
                  <p className="card__description p-8 text-[#D7BDCA] overflow-hidden overflow-ellipsis">{book.isbn}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>

    );
}

export default Cards;
