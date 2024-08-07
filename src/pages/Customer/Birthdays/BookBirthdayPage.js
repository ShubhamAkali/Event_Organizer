import React from 'react';
import BookBirthday from '../../components/Customer/BookBirthday';

const BookBirthdayPage = () => {
  const birthdayId = 1; // Assume birthday ID is retrieved from route params or context

  return (
    <div>
      <BookBirthday birthdayId={birthdayId} />
    </div>
  );
};

export default BookBirthdayPage;
