FROM openjdk:8-jdk

VOLUME /tmp

ARG JAR_FILE=./build/libs/backend-0.0.1-SNAPSHOT.jar

ADD ${JAR_FILE} backend.jar

ENV USE_PROFILE dev

ENTRYPOINT ["java","-Dspring.profiles.active=${USE_PROFILE}","-jar","backend.jar"]