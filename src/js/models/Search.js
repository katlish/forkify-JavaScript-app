//13570b732fcc2c783b94d019e1a43d7f
//https://www.food2fork.com/api/search
//https://api.edamam.com/search?q=chicken&app_id=8639057f&app_key=b5cb56d60f6e2e49ba3b801301f17906

import axios from "axios";
import { key, proxy, app_id } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      //const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

      const res = await axios(
        `${proxy}https://api.edamam.com/search?q=${
          this.query
        }&app_id=${app_id}&app_key=${key}`
      );

      this.result = res.data.hits;
    } catch (error) {
      alert(error);
    }
  }
}
