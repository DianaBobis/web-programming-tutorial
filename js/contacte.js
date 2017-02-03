//document.getElementById('agenda').getElementsByTagName('tbody')[0].innerHTML += contact;

// $('#agenda tbody').html(contact);
function getContactsHTML(contact) {
    return '<tr>'+
        '<td>' + contact[0] + '</td>'+
        '<td>' + contact[1] + '</td>'+
        '<td>' + contact[2] + '</td>'+
        '</tr>';
};

var contacts = [
    ['Diana', 'b', '12'],
    ['Mihai','x', '234'],
    ['vasile', 'y', '454']
];
var contactsHTML = '';
for (var i=0; i<contacts.length; i++) {
   /*Afiseaza in consola */
   console.info(contacts[i]);
   contactsHTML += getContactsHTML(contacts[i]);
};

$('#agenda tbody').html(contactsHTML);