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

const createPlayerListItem = function (form) {
  const playerListItem = document.createElement('li');
  playerListItem.classList.add('player-list-item');

  const playerFirstName = document.createElement('h2');
  playerFirstName.textContent = form.first_name.value;
  playerListItem.appendChild(playerFirstName);

  const playerLastName = document.createElement('h2');
  playerLastName.textContent = form.last_name.value;
  playerListItem.appendChild(playerLastName);

  const playerTeam = document.createElement('h2');
  playerTeam.textContent = form.team_name.value;
  playerListItem.appendChild(playerTeam);

  const playerRating = document.createElement('h1');
  playerRating.textContent = form.rating.value;
  playerListItem.appendChild(playerRating);

  console.dir(event);

  return playerListItem;
}

const handleDeleteAllClick = function(event) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
}
