# Dr.DOC

* The WebApp developed in React.js and Node.js will provide the features like 
 * Scanning paper to get digital text
 * Storing it as PDF files
 * Sharing and other functionalities.
 * Handwritten text Recognition, Merge, Convert, Compress.


## Frontend

### local setup  instructions

> cd ./frontend  
> npm install  
> npm start  

### screenshots

![home page / Dr.Doc webapp](./showcase/webapp-screenshot.png)

![drop page / Dr.Doc webapp](./showcase/webapp-droppage.png)

## Backend

### local setup  instructions

#### create API key files

* see the demo files.
* Create a `dev.env` file in `root`( here `/backend`) which Includes All the API Keys(you need to create developer account on convert Api and ilovepdf api for all api keys)
* create `g_client.json` file in `/src` (here `/backend/src`) Which Include All The gVision API Keys.

#### installing dependencies

* install npm modules, from `/backend` folder here
> root/backend$ npm install
* needs node version >= v12.18.3

#### starting local API server

> npm start
* may start on `localhost:3050` or at specified port

### API routes

| name | method | route | working | 
| :---: | :---: | :---: | :---: |
| pdf merge | post | localhost:3000/merge | Y |
| files to pdf | post | localhost:3000/convert | Y |
| text reco. from photo | post | localhost:3000/upload | Y |
| pdf compression | post | localhost:3000/compression | Y |
| add page number | post | localhost:3000/pageNumber | Y |
| encrypt pdf | post | localhost:3000/encrypt | N |
| decrypt pdf | post | localhost:3000/decrypt | Y |
| unlock pdf | post | localhost:3000/unlock | Y |

* Output files will be stored at `backend/src/public/output` folder.
* Test documents can be found at `/test documents` folder.
