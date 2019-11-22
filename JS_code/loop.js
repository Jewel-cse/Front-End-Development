const contacts = ['jewel:11221212','shohel:112243','Chris:2232322', 'Sarah:3453456', 'Bill:7654322'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
      let splitContact = contacts[i].split(':');
      if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
        break;
      } else {
        para.textContent = 'Contact not found.';
      }
    }
  });