document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-form-here');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
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

  const playerLastName = document.createElement('h3');
  playerLastName.textContent = form.last_name.value;
  playerListItem.appendChild(playerLastName);

  const playerTeam = document.createElement('h4');
  playerTeam.textContent = form.team_name.value;
  playerListItem.appendChild(playerTeam);

  const playerRating = document.createElement('p');
  playerRating.textContent = form.rating.value;
  playerListItem.appendChild(playerRating);

  // const author = document.createElement('h3');
  // author.textContent = form.author.value;
  // readingListItem.appendChild(author);
  //
  // const category = document.createElement('p');
  // category.textContent = form.category.value;
  // readingListItem.appendChild(category);

  return playerListItem;
}
