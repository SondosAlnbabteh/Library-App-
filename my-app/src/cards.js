// src/Cards.js
import './cards.css';
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
            <ul className="cards">
                {person.books.map((book, index) => (
                    <li key={book.id}>
                        <a href="#" className="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">{book.title}</h3>
                                        <span className="card__status">Book number {index + 1}</span>
                                    </div>
                                </div>
                                <p className="card__description">ISBN: {book.isbn}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Cards;
