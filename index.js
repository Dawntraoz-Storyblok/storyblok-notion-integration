import { Client } from "@notionhq/client";
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;
const pageId = process.env.NOTION_PAGE_ID;


const getAllArticles = async () => {
  /* const response = await notion.databases.query({
    database_id: databaseId,
  }); */
}

const getArticle = async () => {
  try {
    const metadata = await notion.pages.retrieve({ page_id: pageId });
    const content = await notion.blocks.children.list({ block_id: pageId });
    console.log(metadata);
    console.log(content);
  } catch (error) {
    console.error(error.body);
  }
}

getArticle();