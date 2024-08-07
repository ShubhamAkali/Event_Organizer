import React from 'react';
import BookSeminar from '../../components/Customer/BookSeminar';

const BookSeminarPage = () => {
  const seminarId = 1; // Assume seminar ID is retrieved from route params or context

  return (
    <div>
      <BookSeminar seminarId={seminarId} />
    </div>
  );
};

export default BookSeminarPage;
