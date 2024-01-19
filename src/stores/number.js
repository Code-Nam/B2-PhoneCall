import { defineStore } from "pinia";

const date = new Date();

let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year} at ${time}`;

export const useNumberStore = defineStore('number', {
  state: () => ({
    callNumber: {
      name: null,
      number: "",
      date: currentDate
    },
    contact: {
      name: "",
      number: "",
    },
    contacts: [
      {
        name: "Piotr",
        number: "123123",
      },
      {
        name: "Kamil",
        number: "2312312",
      }
    ],
    callLog: []
  }),
  actions: {
    addDigit(number) {
      this.callNumber.number += number;
    },
    call(caller=null, number) {
      this.callNumber.number = number;
      this.callNumber.name = caller;
      this.callLog.push(this.callNumber);
      this.callNumber = {
        name: null,
        number: "",
        date: currentDate
      }
    },
    addContact(name, number) {
      this.contact = {
        name: name,
        number: number,
      }
      this.contacts.push(this.contact)
      this.contact = {
        name: "",
        number: ""
      }
    }
  }
});