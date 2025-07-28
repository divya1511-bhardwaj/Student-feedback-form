// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent default form behavior

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    if (!firstName || !lastName || !email || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    const fullName = `${firstName} ${lastName}`;
    const data = { name: fullName, email, message: feedback };

    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Thank You! Feedback Submitted Successfuly.');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Error connecting to the server.');
      console.error(err);
    }
  });
});

