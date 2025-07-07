class Contact {
    constructor(name, phone, gmail) {
        this.id = phone; // Unique ID using phone number
        this.name = name;
        this.phone = phone;
        this.gmail = gmail;
    }
}


class ContactList {
    constructor() {
        this.contactArr = [];
    }

    addContact(name, phone, gmail) {
        const duplicate = globalContacts.find(c => c.contactArr[0].phone === phone);
        if (duplicate) {
            alert("A contact with this mobile number already exists!");
            return false;
        }
        const contact = new Contact(name, phone, gmail);
        this.contactArr.push(contact);
        globalContacts.push(this);
        return true;
    }

    printOutput() {
        return this.contactArr;
    }

    printName() {
        return this.contactArr[0].name
    }

    printPhone() {
        return this.contactArr[0].phone
    }

    printGmail() {
        return this.contactArr[0].gmail
    }
}

// A global array to keep track of contact names
const globalContacts = [];

const contactAdder = document.getElementById('contactAdder');       // button to add contact on top right
const form = document.getElementById('form');                       // contact addition form parent
const contactForm = document.getElementById('contactForm');         // contact addition main form
const editForm = document.querySelector('.editForm');               // contact edit main form
const formClose = document.getElementById('formClose');             // red cross button to close form
const contactSaved = document.getElementById('contactSaved');       // div saynig 'contact saved!' after form submission
const noContactsYet = document.getElementById('noContactsYet');     // div saying 'no contacts yet' when there are none
const contact_list = document.getElementById('contactList');        // parent div to keep the contact list

let contactName;                                                    // the div inside contat.html injected in teh future
let phoneToEdit = null;
let contactCard = null;

document.addEventListener('DOMContentLoaded', () => updateDisplay())

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gmail = document.getElementById('gmail').value.trim();

    if (!/^\d{10,13}$/.test(phone)) {
        alert("Phone number must be 10 to 13 digits.");
        return;
    }

    const user = new ContactList();
    const added = user.addContact(userName, phone, gmail);

    if (!added) return; // Stop if duplicate found

    contactForm.style.display = 'none';
    contactSaved.style.display = 'flex';

    setTimeout(() => {
        contactSaved.style.display = 'none';
        form.style.display = 'none';
    }, 2000);

    createContactCard(userName, phone);  // Send phone as unique ID
    updateDisplay();
});


function createContactCard(name, phone) {
    const contactCardLocal = document.createElement('div');
    contactCardLocal.className = "flex items-center justify-between h-20 w-full my-2 p-2 bg-white shadow shadow-md border border-gray-300 rounded-xl";
    contactCardLocal.dataset.phone = phone;

    contactCardLocal.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="flex justify-center items-center text-white bg-gray-300 text-3xl rounded-full size-13 border border-gray-300">
                <i class="fa-solid fa-user"></i>
            </div>
            <span class="contactName mx-2">${name}</span>
        </div>
        <div class="flex justify-between items-center h-full w-1/7 text-gray-500">
            <i class="fa-solid fa-pen hover:text-gray-900 cursor-pointer editButton"></i>
            <i class="fa-solid fa-trash hover:text-gray-900 cursor-pointer deleteButton"></i>
        </div>
    `;

    const deleteBtn = contactCardLocal.querySelector('.deleteButton');
    deleteBtn.addEventListener('click', () => {
        const phoneToDelete = contactCardLocal.dataset.phone;
        const index = globalContacts.findIndex(c => c.contactArr[0].phone === phoneToDelete);
        if (index !== -1) {
            globalContacts.splice(index, 1);
        }
        contactCardLocal.remove();
        updateDisplay();
    });

    const editBtn = contactCardLocal.querySelector('.editButton');
    editBtn.addEventListener('click', (event) => {
        contactCard = event.currentTarget.closest('div[data-phone]');
        phoneToEdit = contactCard.dataset.phone;
        // Pre-fill edit form fields
        const index = globalContacts.findIndex(c => c.contactArr[0].phone === phoneToEdit);
        if (index !== -1) {
            document.getElementById('editName').value = globalContacts[index].contactArr[0].name;
            document.getElementById('editNumber').value = globalContacts[index].contactArr[0].phone;
            document.getElementById('editGmail').value = globalContacts[index].contactArr[0].gmail;
        }
        form.style.display = 'block';
        editForm.style.display = 'flex';
        contactForm.style.display = 'none';
    });

    contact_list.appendChild(contactCardLocal);
}

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const index = globalContacts.findIndex(c => c.contactArr[0].phone === phoneToEdit);
    const newName = document.getElementById('editName').value;
    const newNumber = document.getElementById('editNumber').value;
    const newGmail = document.getElementById('editGmail').value;
    contactUpdater(newName, newNumber, newGmail, index);
    // Update the contact name in the UI
    if (contactCard) {
        const nameSpan = contactCard.querySelector('.contactName');
        if (nameSpan) {
            nameSpan.innerText = newName;
        }
    }
    // Optionally hide the form after editing
    setTimeout(() => {
        contactSaved.style.display = 'none';
        form.style.display = 'none';
    }, 2000);
    updateDisplay();
})

function contactUpdater(name, phone, gmail, index) {
    const globalIndex = globalContacts[index].contactArr;
    globalIndex.name = name;
    globalIndex.phone = phone;
    globalIndex.gmail = gmail;
}

contactAdder.addEventListener('click', () => {
    form.style.display = 'block';
    contactForm.style.display = 'flex';
    contactSaved.style.display = 'none';
    contactForm.reset();

    document.getElementById('name').focus();
})

formClose.addEventListener('click', () => form.style.display = 'none')


function updateDisplay() {
    if (globalContacts.length === 0) {
        noContactsYet.style.display = 'flex';
        contact_list.style.display = 'none';
        contact_list.classList.add('hidden');
    } else {
        contact_list.style.display = 'block';
        noContactsYet.style.display = 'none';
        contact_list.classList.remove('hidden');
    }
}
