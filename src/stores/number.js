import { defineStore } from "pinia";

export const useNumberStore = defineStore('number', {
  state: () => ({
    strNumber: {
      number: ""
    },
    contact: {
      name: "",
      number: ""
    },
    contacts: [],
    callLog: []
  }),
  actions: {
    addDigit(number) {
      this.strNumber.number += number;
    },
    call(caller) {
      this.callLog.push(caller)
      this.strNumber.number = "";
    },
    addContact(name, number) {
      this.contact = {
        name,
        number
      }
      this.callLog.push(this.contact)
      this.contacts.push(this.contact)
    }
  }
});