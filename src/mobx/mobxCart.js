import { makeAutoObservable } from "mobx";

class CounterCart {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem = (obj) => {
    this.items.push(obj);
  };

  deleteItems = (id) => {
    console.log(id);
    this.items = this.items.filter((item) => item.id !== id);
  };

  deleteAllItems = (obj) => {
    console.log(obj);
    this.items = this.items.filter((item) => item.id !== obj.target.id);
  };
}

export default new CounterCart();
