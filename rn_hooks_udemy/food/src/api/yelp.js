import axios from 'axios';

const apiKey =
  'wub3L3ApBG2zvzcpWPpJuKOgtCYToOCai7_eTByNkIW5lbpAXoIq4WbCeSFOcIHBRiK_T_DtfCD6AFa6s2sqlAFL93GTGINVacIidHzR2Uk7obxFyYbYIGidAz3eXnYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
