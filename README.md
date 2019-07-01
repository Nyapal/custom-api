# Plant API by Nyapal and Erica
**GitHub Repository:** https://github.com/Nyapal/custom-api <hr />

This API's goal is to provide information on various species of plants as well as allow users to view, comment, edit and add new plants to the API.

## Using the Website
The API has a modest frontend for ease of use.

### Overview
| Route              | Functionality                                 |
|:-------------------|:----------------------------------------------|
| `/`                | Displays basic information                    |
| `/plants`          | Displays all plants                           |
| `/plants/json`     | Displays all gems in `JSON` format            |
| `/plants/new`      | Displays new plant form                       |
| `/plants/:id`      | Displays one plants's detail                  |
| `/plants/:id/json` | Displays one plants's detail in `JSON` format |
| `/plants/:id/edit` | Displays plant edit form                      |
| `/login`           | Displays login form                           |
| `/sign-up`         | Displays sign up form                         |

## Getting Started Locally
*Here's a step-by-step guide to set this API up locally on your computer.*
1. Set up project files locally
	1. Fork <a href="https://github.com/Nyapal/custom-api">this repo</a>.
	1. Open terminal; `cd` into your preferred repo library location
	1. Clone your new fork into this location
	1. `cd` into the new clone
1. Host environment locally
	1. Run `yarn install` in your terminal instance to initialize requirements
	1. Run `nodemon` in your terminal to host the website locally
	1. navigate to `http://localhost:4040/` in a browser of your choice
	1. modify and digest data that you alone can access
		- TIP: *this data is stored locally on your computer*
	1. use the apps `/json` routes to retrieve data as you please

## Aspirations
In future iterations, it would be nice to include:
- User provisioning
- Tests & error handling
- Structure refactoring