import Parser from 'rss-parser'

const parser = new Parser();

let articles: string[] = [];

const getFeed = async (url: string) => {
    const feed = await parser.parseURL(url);

    feed.items.forEach(item => {
        articles.push(item.title!)
    });
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    await getFeed(query.param1!.toString());
    return articles
})