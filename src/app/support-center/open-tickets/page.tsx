'use client';

const OpenTickets = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className="">
      <p className="">All Open Tickets _______</p>

      <button
        onClick={() => {
          console.log('Click by ');
        }}>
        Click me
      </button>
    </div>
  );
};

export default OpenTickets;
