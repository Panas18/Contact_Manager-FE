import Contact from "../domain/contact";

function sortContact(contacts: Contact[]) {
  const favouriteContacts = contacts.filter((contact: Contact) => {
    return contact.is_favourite === true;
  });
  const unFavouriteContacts = contacts.filter((contact: Contact) => {
    return contact.is_favourite === false;
  });
  const sortedFavourite = favouriteContacts.sort(function (
    a: Contact,
    b: Contact,
  ) {
    let fa = a.first_name.toLowerCase(),
      fb = b.first_name.toLowerCase();
    if (fa < fb) {
      return -1;
    }

    if (fa > fb) {
      return 1;
    }

    return 0;
  });

  const sortedUnFavourite = unFavouriteContacts.sort(function (
    a: Contact,
    b: Contact,
  ) {
    let fa = a.first_name.toLowerCase(),
      fb = b.first_name.toLowerCase();
    if (fa < fb) {
      return -1;
    }

    if (fa > fb) {
      return 1;
    }

    return 0;
  });

  const sortedContact = sortedFavourite.concat(sortedUnFavourite);
  return sortedContact;
}

export default sortContact;
