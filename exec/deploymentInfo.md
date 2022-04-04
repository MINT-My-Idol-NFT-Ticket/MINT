## BE

java 1.8      


gradle 6.9   

spring boot 2.6.4  

IDE : intelliJ ultimate 2021.1.3   

```
FROM openjdk:8-jdk

VOLUME /tmp

ARG JAR_FILE=./build/libs/backend-0.0.1-SNAPSHOT.jar

ADD ${JAR_FILE} backend.jar

ENV USE_PROFILE dev

ENTRYPOINT ["java","-Dspring.profiles.active=${USE_PROFILE}","-jar","backend.jar"]
```

## FE

language : javascript  

react 17.0.2

IDE: vs code 

dockerfile 설정

```
FROM nginx

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```
## jenkins command
```
cd backend
chmod 777 gradlew
./gradlew clean bootjar
docker build -t backend ./
docker ps -q --filter "name=backend" | grep -q . && docker stop backend && docker rm backend | true
docker run -d -p 9090:9090 -it -e TZ=Asia/Seoul -v /home/mint/img:/src/main/resources/image 
--name backend backend   
```
```
cd frontend
npm install
npm run build
docker build -t frontend .
docker ps -q --filter "name=frontend" | grep -q . && docker stop frontend && docker rm frontend | true
docker run -d -p 80:80 -it -v /home/mint/img:/app/build/static/media --name frontend frontend 
docker rmi $(docker images -f "dangling=true" -q)
```