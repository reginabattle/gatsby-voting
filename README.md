# Strategic Technology Give Back

Landing page built with [Gatsby](https://www.gatsbyjs.com), [React](https://reactjs.org), and [WordPress](https://wordpress.org) as a headless CMS.

Strategic Technology's Give Back allows users to vote for their favorite charity.

## WordPress Setup

Install and setup [WordPress](http://wordpress.org) on a host or sign up at [WordPress.com](http://wordpress.com).

#### Install plugins

The following plugins need to be installed:

- [WP Gatsby](https://wordpress.org/plugins/wp-gatsby/)
- [WP GraphQL](https://wordpress.org/plugins/wp-graphql/)
- [JWT Authentication for WP-API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

## Get started

Clone the repo and run:

```
npm install
```

### Environment Variables

Create `.env.development` and `.env.production` files, and add the following:

```
WPGRAPHQL_URL="https://yourwebsite.com/graphql"
GATSBY_API_URL="https://yourwebsite.com/wp-json/wp/v2"
GATSBY_JWT_TOKEN=YOUR_TOKEN
```

Both files are required for Gatsby. Variables must be prefixed with `GATSBY`.

### Gatsby commands

Run dev environment:

```
gatsby develop
```

Build for production (`/public` folder):

```
gatsby build
```
