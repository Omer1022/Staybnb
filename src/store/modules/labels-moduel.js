// import { stayService } from "../../services/stay-service.js";
import { labelService } from "../../services/label-service.js";


export default {
  state: {
    labels:null,
  },
  getters: {
    lableToDisplay({labels}) {
        console.log("from label mudel",labels)
        // if (!labels) return;

        // return labels;
    }
},
actions: {
  loadLables({ commit }) {
    labelService
      .query()
      .then((labels) => {
        commit({ type: "setLabels", labels });
        return labels;
      })
      .catch((err) => {
        console.log(err);
      });
  },

},
mutations: {
  setLabels(state, {labels}){
    console.log("from label stor",labels)
  }
},
}