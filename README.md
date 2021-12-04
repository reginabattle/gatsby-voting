# Strategic Technology Give Back

Landing page that allows users to vote for their favorite charity.

## Tech stack

- React - Javascript library
- Gatsby - Static site generator
- WordPress - headless CMS

## Get started

Clone the repo and run:

```
npm install
```

Run local environment:

```
gatsby develop
```

Build for production:

```
gatsby build
```

### WordPress Setup

Create an `.env` file, and add the url to your WordPress site. Be sure to add `/graphql` to the end.

```
WPGRAPHQL_URL="https://yourwebsite.com/graphql"
```

#### Install plugins

The following plugins need to be installed:

- WP Gatsby
- WP GraphQL
