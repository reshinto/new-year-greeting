#!/bin/sh
# chmod a+x run.sh

# digital ocean cloud environment
# sudo docker stop newyear
# sudo docker rm newyear
# sudo docker rmi newyear
# sudo docker build -t newyear .
# sudo docker run -d -p 2211:80 --name newyear --restart unless-stopped newyear

# local environment
PUBLIC_URL=. yarn run build
docker stop newyear
docker rm newyear
docker rmi newyear
docker build -t newyear .
docker run -d -p 2211:80 --name newyear --restart unless-stopped newyear
