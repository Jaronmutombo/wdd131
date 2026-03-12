
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector(''); //fill the blank

buttonElement.addEventListener('click', function() {
    // Handle button click event ADD CHAPTER
});
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus(); 
    }   