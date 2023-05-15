import { Client } from "@notionhq/client";
import StoryblokClient from "storyblok-js-client";
import dotenv from "dotenv";
dotenv.config();

const notionClient = new Client({ auth: process.env.NOTION_KEY });
const storyblokClient = new StoryblokClient({
    oauthToken: process.env.STORYBLOK_TOKEN,
})

/**
 * -- Notion Ids
 **/
// const databaseId = process.env.NOTION_DATABASE_ID;
const pageId = process.env.NOTION_PAGE_ID;

/**
 * -- Storyblok Ids
 **/
const spaceId = process.env.STORYBLOK_SPACE_ID;

/* const getAllArticles = async () => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });
} */

const migrateArticle = async () => {
  try {
    const metadata = await notionClient.pages.retrieve({ page_id: pageId });

    const title = metadata.properties.Title.title[0].plain_text;

    await storyblokClient.post(`spaces/${spaceId}/stories/`, {
      "story": {
        "name": title,
        "slug": title.replaceAll(' ', '-').toLowerCase(),
        "content": {
          "component": "page",
          "link": {
            "id": "",
            "url": metadata.properties.Link.url,
            "linktype": "url",
            "fieldtype": "multilink",
            "cached_url": metadata.properties.Link.url
          }
        }
      },
      "publish": 1
    });
  } catch (error) {
    console.error(error.body);
  }
}

migrateArticle();