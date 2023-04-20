import axios from "axios";

export default {
  state: () => ({
    newsItems: [],
    title: "Все новости",
    isActiveCategories: 0,
    newsPageItem: {}
  }),

  getters: {
    setNews(state:any){
      return state.newsItems.filter((item: any) =>{
        if(state.title == "Все новости"){
          return state.newsItems
        }
        if(item.categories){
          return item.categories[0] == state.title
        }
        
      })
    }
  },

  mutations: {
  setItemNews(state:any, newNews:any){
    state.newsPageItem = newNews
  },
    setTitle(state:any, title:string){
      state.title = title
  },
  setIsActiveCategories(state:any, isActiveCategories: any){
    state.isActiveCategories = isActiveCategories
  },
    setNewsItem(state: any, newsItem: any) {
      if (typeof newsItem === "object") {
        state.newsItems = [...state.newsItems, newsItem];
      }
    },
  },

  actions: {
    async getNews({ commit }: any) {
      try {
        const response = await axios.get("http://localhost:5050/");
        response.data.forEach((element: any) => {
          commit("setNewsItem", element);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
