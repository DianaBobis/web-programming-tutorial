//document.getElementById('agenda').getElementsByTagName('tbody')[0].innerHTML += contact;
// $('#agenda tbody').html(contact);

//Varianta JS
// function getContactsHTML(contact) {
//     return '<tr>'+
//         '<td>' + contact[0] + '</td>'+
//         '<td>' + contact[1] + '</td>'+
//         '<td>' + contact[2] + '</td>'+
//         '</tr>';
// };
//
// var contacts = [
//     ['Diana', 'b', '12'],
//     ['Mihai','x', '234'],
//     ['vasile', 'y', '454']
// ];
// var contactsHTML = '';
// for (var i=0; i<contacts.length; i++) {
//    /*Afiseaza in consola */
//    console.info(contacts[i]);
//    contactsHTML += getContactsHTML(contacts[i]);
// };
//
// $('#agenda tbody').html(contactsHTML);

//varianta JSON

function getContactsHTML(contact) {
    return '<tr>'+
        '<td>' + contact.firstname + '</td>'+
        '<td>' + contact.lastname + '</td>'+
        '<td>' + contact.phone + '</td>'+
        '</tr>';
};
var contactsHTML='';

var contacts = [];
function showContacts(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        console.info(contacts[i]);
        contactsHTML += getContactsHTML(contacts[i]);
    }
    $('#agenda tbody').html(contactsHTML);

}

// showContacts(contacts);

$.ajax('servlets/contacts.json',{
        success: function () {
            console.info('contacts loaded', contacts);
            showContacts(contacts)
        }
    }
);

