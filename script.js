'use strict';

//variblr which get div from html to evry contects
let divPrintNames = document.getElementById('booxNames');
let divShowDetails;

function updateOb(object) {
  bookNames.push(object);
  divPrintNames.innerHTML = '';
  printNames();
}
//this is the array of object context\\
let bookNames = [
  {
    firstName: 'Yosi',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: {
      street: 'HariGolan',
      number: '3',
      city: 'Ashdod',
      country: 'Israel',
    },
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'david',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: {
      street: 'HariGolan',
      nimber: '7',
      city: 'Ashdod',
      country: 'Israel',
    },
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'uri',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: {
      street: 'HariGolan',
      number: '15',
      city: 'Ashdod',
      country: 'Israel',
    },
    email: 'yosi@gmail.com',
    description: '',
  },
  {
    firstName: 'moshe',
    lastName: 'Cohen',
    phoneNumber: '0549574345',
    adress: {
      street: 'HariGolan',
      number: '43',
      city: 'Ashdod',
      country: 'Israel',
    },
    email: 'yosi@gmail.com',
    description: '',
  },
];

function printNames() {
  //function that create div for evry contect
  // and printed it on the page in HTML

  // vairble which create ul for contect {
  let ul = document.createElement('ul');
  divPrintNames.appendChild(ul);
  //}
  for (let i = 0; i < bookNames.length; i++) {
    // loop run on the array of contects

    // varaible which create li for details
    let li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('details');

    let spanName = document.createElement('span');
    spanName.classList.add('nameContect');
    //create span for phone number
    let spanPhone = document.createElement('span');
    spanPhone.classList.add('phoneContect');

    // inner details from booxNames array
    spanName.innerHTML = `${bookNames[i].firstName} ${bookNames[i].lastName}`;
    spanPhone.innerHTML = bookNames[i].phoneNumber;
    li.appendChild(spanName);
    li.appendChild(spanPhone);

    //add event click to td details to show all details

    spanName.addEventListener('click', () => {
      // function is calling them to
      //show details contect
      divShowDetails.innerHTML = '';
      onClickshowDetails(i);
    });
    userIcons(li);
  }
}
printNames(); //call function

function userIcons(li) {
  //function to create td for icons user delete and edit
  let spanIcons = document.createElement('span');
  spanIcons.classList.add('icons');
  let iconDelete = document.createElement('img');
  let iconEdit = document.createElement('img');
  iconDelete.src = 'images/trash.svg';
  iconEdit.src = 'images/edit.svg';
  spanIcons.appendChild(iconDelete);
  spanIcons.appendChild(iconEdit);
  li.appendChild(spanIcons);
}

function showDetails() {
  let containerChild = document.getElementById('containerChild');
  divShowDetails = document.createElement('div');
  divShowDetails.classList.add('showDetails');
  containerChild.appendChild(divShowDetails);
}
showDetails();

function onClickshowDetails(index) {
  //function to print details on divShow
  let divShowDetails = document.querySelector('.showDetails');
  divShowDetails.style.visibility = 'visible';

  // add event click to divShowDetails for hide again if i click on the window
  divShowDetails.addEventListener('click', function () {
    divShowDetails.style.visibility = 'hidden';
    divShowDetails.innerHTML = '';
  });
  printDetails(index, divShowDetails);
}

function printDetails(index, divShowDetails) {
  //function to print all contect details on the window
  let userContect = '';
  bookNames.forEach((e, i, o) => {
    if (i === index) {
      // i equl to some li end if i equl to the
      // index in array
      userContect = e;
    }
  });

  let pName = document.createElement('p');
  divShowDetails.appendChild(pName);
  pName.classList.add('nameShow');
  pName.innerHTML = userContect.firstName + ' ' + userContect.lastName + `<br>`;

  let pPhone = document.createElement('p');
  pPhone.classList.add('allShow');
  divShowDetails.appendChild(pPhone);
  pPhone.innerHTML = userContect.phoneNumber + `<br>`;

  let pStreetAndNum = document.createElement('p');
  pStreetAndNum.classList.add('allShow');
  divShowDetails.appendChild(pStreetAndNum);
  pStreetAndNum.innerHTML = `${userContect.adress.street}  ${userContect.adress.number}<br>`;

  let pCity = document.createElement('p');
  pCity.classList.add('allShow');
  divShowDetails.appendChild(pCity);
  pCity.innerHTML = userContect.adress.city + `<br>`;

  let pCountry = document.createElement('p');
  pCountry.classList.add('allShow');
  divShowDetails.appendChild(pCountry);
  pCountry.innerHTML = userContect.adress.country + `<br>`;

  let pEmail = document.createElement('p');
  pEmail.classList.add('allShow');
  divShowDetails.appendChild(pEmail);
  pEmail.innerHTML = userContect.email + `<br>`;

  let pDescription = document.createElement('p');
  pDescription.classList.add('allShow');
  divShowDetails.appendChild(pDescription);
  pDescription.innerHTML = userContect.description + `<br>`;
}
///create by PS

sessionStorage.setItem('bookNames', bookNames);

// export default updateOb;
