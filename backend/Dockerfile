FROM openjdk:8-jdk

VOLUME /tmp


ARG JAR_FILE=./build/libs/backend-0.0.1-SNAPSHOT.jar


ADD ${JAR_FILE} backend.jar


ENTRYPOINT ["java","-jar","backend.jar"]