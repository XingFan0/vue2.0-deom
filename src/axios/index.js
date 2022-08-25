import axios from "axios";

export default {
  $axios(options) {
    let apiUri = null;
    if (process.env.VUE_APP_ENV == "dev") {
      apiUri = options.url;
    } else {
      apiUri = process.env.VUE_APP_BASS_API + options.url;
    }
    return axios({
      url: options.urls,
    });
  },
};
