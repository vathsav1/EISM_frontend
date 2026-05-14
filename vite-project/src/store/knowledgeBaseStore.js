import { create } from "zustand";

const useKnowledgeBaseStore = create(
  (set) => ({

    articles: [],

    addArticle: (article) =>

      set((state) => ({

        articles: [
          article,
          ...state.articles,
        ],

      })),

    incrementViews: (id) =>

      set((state) => ({

        articles: state.articles.map(
          (article) =>

            article.id === id
              ? {
                  ...article,
                  views:
                    article.views + 1,
                }
              : article
        ),

      })),
  })
);

export default useKnowledgeBaseStore;