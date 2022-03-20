cd client
npm run build
cd ..
cd server 
npm run build
cd ..
docker-compose --env-file ./production.env up