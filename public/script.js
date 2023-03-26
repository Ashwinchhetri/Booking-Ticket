const seats = document.querySelectorAll(".seat");
const input_name = document.querySelector(".name-input");
const names = document.querySelector('.name');
const tot_seats = document.querySelector('.seats');
const confirm = document.querySelector('.confirm');
const selectSeat = document.querySelector('.selSeat');
var counter = 0;
selectSeat.addEventListener("input", () => {
  counter = selectSeat.value;
})

var count = 0;
seats.forEach((seat) => {
    seat.addEventListener("click", () => {
        count = count+1;
        if(count > counter) alert(`You chose only , ${counter}`);
        else{
        seat.classList.toggle('selecteds');
        tot_seats.innerHTML = count; }
    });
});

input_name.addEventListener("input", () => {
    // console.log(input_name.value);
    names.innerHTML = input_name.value;
})

confirm.addEventListener("click", () => {
    names.innerHTML = '-';
    tot_seats.innerHTML = '-';
    seats.forEach((seat) => {
        seat.classList.remove("selecteds");
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.itsBook').addEventListener('click', function() {
//       var bookName = input_name.value;
//       var bookSeat = count;
//       console.log("Name and seat is: ");
//       console.log(bookName, bookSeat);
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', '/booking');
//       xhr.setRequestHeader('Content-Type', 'application/json');
//       xhr.onload = function() {
//         if (xhr.status === 200) {
//           // handle the response from the server
//           console.log("Inserted Successfully");
//         } else {
//           console.log('Request failed.  Returned status of ' + xhr.status);
//         }
//       };
//       xhr.send(JSON.stringify({ name: bookName, seats: bookSeat }));
//       console.log(`${bookName}`, `${bookSeat}`);
//     });
// });

// const bookingBtn = document.querySelector('.itsBook');
// var bookName = input_name.value;
// var bookSeat = count;
// bookingBtn.addEventListener('click', function(){
//   const data = {
//     name: bookName,
//     seats: bookSeat
//   };
//   console.log("Name and seat is: ");
//   console.log(data);
//   fetch('/booking', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     console.log("Booking request sent successfully");
//   })
//   .catch(error => {
//     console.log("Error sending booking request: ", error);
//   });
// });
  