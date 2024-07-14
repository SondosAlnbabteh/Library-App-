import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { databaseURL } from './firebaseCon.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

function Books() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]); // حالة لتخزين الكتب المسترجعة من Firebase
  const [selectedBook, setSelectedBook] = useState(null); // الكتاب المحدد للتعديل




  // جلب البيانات من Firebase عند تحميل الصفحة
  useEffect(() => {
    fetchData();
  }, []);

 

  const fetchData = async () => {
    try {
      const response = await axios.get(`${databaseURL}/books/book.json`);
      if (response.data) {
        // تحويل البيانات من الكائن إلى مصفوفة لتخزينها في حالة الكتب
        const fetchedBooks = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key]
        }));
        setBooks(fetchedBooks);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
        const response = await axios.get(`${databaseURL}/books/book/${id}.json`);
        const currentBook = response.data;
    
        // تحديث القيمة المطلوبة فقط (isDeleted) والاحتفاظ بالقيم الأخرى
        await axios.put(`${databaseURL}/books/book/${id}.json`, {
          ...currentBook,
          isDeleted: true
        });
      const updatedBooks = books.map(book => {
        if (book.id === id) {
          return {
            ...book,
            isDeleted: true
          };
        }
        return book;
      });
  
      setBooks(updatedBooks);
  
      // عرض رسالة تأكيد للمستخدم
      alert("Book marked as deleted!");
    } catch (error) {
      console.error('Error marking book as deleted:', error);
      alert(`Error: ${error.message}`);
    }
  };



  const handleEdit = (book) => {
    setSelectedBook(book);
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
  };

  const cancelEdit = () => {
    setSelectedBook(null);
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const saveEditedData = async () => {
    try {
      const editedBook = {
        ...selectedBook,
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn
      };

      await axios.put(`${databaseURL}/books/book/${selectedBook.id}.json`, editedBook);

      // تحديث الكتاب المحدد بالقيم الجديدة في الحالة المحلية
      const updatedBooks = books.map(book => {
        if (book.id === selectedBook.id) {
          return {
            ...book,
            bookTitle: title,
            bookAuthor: author,
            bookIsbn: isbn
          };
        }
        return book;
      });

      setBooks(updatedBooks);

      alert("Book updated successfully!");
      setSelectedBook(null);
      setTitle("");
      setAuthor("");
      setIsbn("");
    } catch (error) {
      console.error('Error updating book:', error);
      alert(`Error: ${error.message}`);
    }
  };



  
  const saveData = async () => {
    try {
      const newDoc = {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        isDeleted: false // إضافة حقل isDeleted بشكل افتراضي
      };
      const response = await axios.post(`${databaseURL}/books/book.json`, newDoc);
      if (response.status === 200) {
        alert("Data saved successfully");
        fetchData();
      
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-lg p-5 mx-auto my-8 bg-gray-100 rounded-lg shadow-lg books-container">
    <h1 className="mb-4 text-2xl font-bold">Books</h1>
    <div className="mt-5 form-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        className="w-full p-2 mb-3 text-lg border border-gray-300 rounded input-field"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author"
        className="w-full p-2 mb-3 text-lg border border-gray-300 rounded input-field"
      />
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        placeholder="Enter ISBN"
        className="w-full p-2 mb-3 text-lg border border-gray-300 rounded input-field"
      />
      {selectedBook ? (
        <div>
          <button onClick={saveEditedData} className="w-full p-3 mt-4 text-white bg-pink-700 rounded save-button">Save Changes</button>
          <button onClick={cancelEdit} className="w-full p-3 mt-4 text-white bg-pink-200 rounded cancel-button">Cancel</button>
        </div>
      ) : (
        <button onClick={saveData} className="w-full p-3 mt-4 text-white bg-pink-700 rounded save-button">Save Data</button>
      )}
    </div>
    <div className="books-list grid gap-4 mt-20 grid-cols-auto-fill min-w-[250px]">
      {books.filter(book => !book.isDeleted).map(book => (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md book-card" key={book.id}>
          <h3 className="mb-2 text-lg font-bold">{book.bookTitle}</h3>
          <p className="mb-1 text-gray-600">Author: {book.bookAuthor}</p>
          <p className="mb-1 text-gray-600">ISBN: {book.bookIsbn}</p>
          <div className="flex justify-end mt-2 icon-container">
            <FontAwesomeIcon icon={faEdit} className='ml-2 text-lg cursor-pointer icon hover:text-pink-600' onClick={() => handleEdit(book)} /> 
            <FontAwesomeIcon icon={faTrash} className='ml-2 text-lg cursor-pointer icon hover:text-pink-600' onClick={() => handleDelete(book.id)}/>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
} 

export default Books;