import fs from "fs";

class Items {
  constructor(url) {
    this.url = url;
  }
  async showItems() {
    try {
      let array = await fs.promises.readFile(this.url, "utf-8");
      console.log(array);
      return array;
    } catch (error) {
      console.log("Error Show: " + error);
    }
  }
}

export default Items;
