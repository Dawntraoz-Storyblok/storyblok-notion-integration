# Storyblok Notion integration

[WIP] Integration to migrate *Notion* pages to a Storyblok space

## Migrate a page from *Notion* to Storyblok

### Create a *Notion* Integration

1. Create a *Notion* integration to use the `API_TOKEN` in this repo experiment
2. Add the integration as a connection to the Database in your Notion workspace

#### Get *Notion* important parameters

Add 3 variables to your `.env` file:

```
NOTION_KEY="<API_TOKEN_INTEGRATION>"
NOTION_DATABASE_ID="<DATABASE_NUMBERS_IN_URL>"
NOTION_PAGE_ID="<NOTION_PAGE_HASH_AFTER_NAME>"
```

### Create a new Storyblok Content Type

In order to migrate the pages from *Notion* we need a `Page` Content Type with the fields we want to migrate:

1. Create a space from scratch
2. Remove the Blocks, leave the `page` Content Type and remove all the fields from it
3. Then add a `link` and an `image` field to `page`

#### Get *Storyblok* important parameters

Add 2 variables to your `.env` file:

```
STORYBLOK_TOKEN="<PERSONAL_TOKEN_AT_YOUR_STORYBLOK_ACCOUNT>"
STORYBLOK_SPACE_ID="<SPACE_ID_SETTINGS>"
```

### Execute the script

Now you can run the sample script:

```bash
node index.js
```
