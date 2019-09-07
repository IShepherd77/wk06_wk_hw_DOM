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

const createFirstName = function (form) {
  const playerFirstName = document.createElement('p');
  playerFirstName.textContent = form.first_name.value;
  playerFirstName.classList.add('name')
  return playerFirstName;
}

const createCheckbox = function(labelNameHere) {
  const checkboxDiv = document.createElement('div');
  const label = document.createElement('label');
  label.innerHTML = labelNameHere;
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

  const playerLastName = document.createElement('p');
  playerLastName.textContent = form.last_name.value;
  playerLastName.classList.add('name');
  playerListItem.appendChild(playerLastName);

  const playerTeam = document.createElement('p');
  playerTeam.textContent = form.team_name.value;
  playerListItem.appendChild(playerTeam);

  const playerRating = document.createElement('p');
  playerRating.textContent = form.rating.value;
  playerListItem.appendChild(playerRating);

    playerListItem.appendChild(createCheckbox('yellow1'));

  console.dir(form);

  return playerListItem;
}

const handleDeleteAllClick = function(event) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
}
