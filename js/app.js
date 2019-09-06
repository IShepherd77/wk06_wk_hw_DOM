document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-form-here');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const playerListItem = createPlayerListItem(event.target);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(playerListItem);

  event.target.reset();
}

const createPlayerListItem = function (form) {
  const playerListItem = document.createElement('li');
  playerListItem.classList.add('player-list-item');

  const firstName = document.createElement('h2');
  firstName.textContent = form.first_name.value;
  playerListItem.appendChild(firstName);

  // const author = document.createElement('h3');
  // author.textContent = form.author.value;
  // readingListItem.appendChild(author);
  //
  // const category = document.createElement('p');
  // category.textContent = form.category.value;
  // readingListItem.appendChild(category);

  return playerListItem;
}
