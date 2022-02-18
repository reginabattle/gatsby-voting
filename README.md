# Gatsby Voting App

[Gatsby](https://www.gatsbyjs.com) site using [WordPress](https://wordpress.org) as a headless content management system. It allows users to vote for their favorite charity.

## WordPress Setup

Install and setup [WordPress](http://wordpress.org) on a host or sign up at [WordPress.com](http://wordpress.com). [Local](https://localwp.com/) is also a great tool for setting up a dev environment.

#### Required plugins

The followig plugins are required to connect Gatsby to WordPress (get content).

- [WP Gatsby](https://wordpress.org/plugins/wp-gatsby)
- [WP GraphQL](https://wordpress.org/plugins/wp-graphql)
- [WP GraphQL for ACF](https://www.wpgraphql.com/acf)
- [JWT Authentication for WP-API](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api)

#### Optional plugins
- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields) - Add custom fields to posts
- [Code Snippets](https://wordpress.org/plugins/code-snippets) - Dashboard customization, custom post types
- [Deploy with NetlifyPress](https://wordpress.org/plugins/deploy-netlifypress) - Automatic or manual deploy, if using Netlify


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
GATSBY_TOKEN_URL="https://yourwebsite.com/wp-json/jwt-auth/v1/token"

GATSBY_JWT_USER="username"
GATSBY_JWT_PASSWORD="password"
GATSBY_COOKIE="cookie_name"
```

Both files are required for Gatsby, and variables must be prefixed with `GATSBY`.

#### Cookie
The site is using cookies to limit how many times a user can vote.

#### JWT

A valid JWT token is required to make API requests. Set the JWT environment variables to your Wordpress username and an [application password](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide). [Postman](https://www.postman.com) is a great tool for testing requests.

### Gatsby commands

Run local environment:

```
gatsby develop
```

Build for deployment (`/public` folder):

```
gatsby build
```

Clear cache:

```
gatsby clean
```
