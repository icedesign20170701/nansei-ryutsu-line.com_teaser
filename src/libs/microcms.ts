import pkg from "microcms-js-sdk";
const { createClient, MicroCMSQueries } = pkg;

const client = createClient({
  serviceDomain: import.meta.env.VITE_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_API_KEY,
});

export const getNews = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "news", queries });
};

export const getNewsDetail = async (
  newsId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail({
    endpoint: "news",
    contentId: newsId,
    queries,
  });
};