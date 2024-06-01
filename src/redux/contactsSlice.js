import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '/src/contacts.json';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialContacts,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter(
                contact => contact.id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;