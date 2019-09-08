document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-form-here');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  const playerList = document.querySelector('#player-list');
  const playerListItem = createPlayerListItem(event.target);
  playerList.appendChild(playerListItem);
  event.target.reset();

}
//refactor last name copying this
const createFirstName = function (form) {
  const playerFirstName = document.createElement('p');
  playerFirstName.textContent = form.first_name.value;
  playerFirstName.classList.add('name')
  return playerFirstName;
}

const createLastName = function (form) {
  const playerLastName = document.createElement('p');
  playerLastName.textContent = form.last_name.value;
  playerLastName.classList.add('name');
  return playerLastName;
}

createTeamName = function(form) {
  const teamName = document.createElement('p')
  teamName.textContent = form.team_name.value;
  teamName.classList.add('team');
  return teamName;
}


const createCheckbox = function(labelName) {
  const checkboxDiv = document.createElement('div');
  checkboxDiv.classList.add('checkbox-align');
  const label = document.createElement('label');
  label.innerHTML = labelName;
  checkboxDiv.appendChild(label);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkboxDiv.appendChild(checkbox);
  return checkboxDiv;
}



const createPlayerListItem = function (form) {
  const playerListItem = document.createElement('div');
  playerListItem.classList.add('player');

  // const playerFirstName = document.createElement('p');
  // playerFirstName.textContent = form.first_name.value;
  // playerFirstName.classList.add('name') //add class name which has bold in css
  // playerListItem.appendChild(playerFirstName);
  playerListItem.appendChild(createFirstName(form));

  // const playerLastName = document.createElement('p');
  // playerLastName.textContent = form.last_name.value;
  // playerLastName.classList.add('name');
  // playerListItem.appendChild(playerLastName);
  playerListItem.appendChild(createLastName(form));

  // const playerTeam = document.createElement('p');
  // playerTeam.textContent = form.team_name.value;
  // playerListItem.appendChild(playerTeam);
  playerListItem.appendChild(createTeamName(form));


  const playerRating = document.createElement('p');
  playerRating.textContent = form.rating.value;
  playerListItem.appendChild(playerRating);

  playerListItem.appendChild(createCheckbox('Yellow 1'));
  playerListItem.appendChild(createCheckbox('Yellow 2'));
  playerListItem.appendChild(createCheckbox('Red'));

  console.dir(form);

  return playerListItem;
}

const handleDeleteAllClick = function(event) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
}
