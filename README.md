# Domain Driven Design 과 함께 하는 AWS Serverless 
AWS Lambda 와 AWS Dynamodb 를 기반으로 Serverless 애플리케이션 개발을 시작하기 위해서는 아래 툴을 반드시 설치해주세요.

## 사전 필수 설치
1. Desktop Docker  
https://docs.docker.com/docker-for-windows/install/  
AWS Dynamodb 를 로컬 환경에서 설치하기 위한 환경이 필요합니다.

2. GIT client 설치  
https://git-scm.com/download/win
소스코드를 다운로드 받기위한 클라이언트 입니다.  

3. Node JS 설치  
https://nodejs.org/ko/download/  
애플리케이션동이 동작하기 위한 런타임(Runtime) 환경입니다.

4. AWS Workbench 설치
https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/workbench.settingup.html  
로컬에 설치된 Dynamodb 를 사용하기 위한 툴입니다.


## AWS Dynamodb 로컬 환경 구성하기
1. 도커가 설치되어 있는지 확인합니다.
```
C:\Users\leehee\>docker -v
Docker version 19.03.12, build 48a66213fe
C:\Users\leehee\>
```
2. 도커 네트워크를 생성합니다.
```
docker network create local-api-network
```

3. dynamodb 컨테이너를 실행합니다. 8000 포트를 사용하며, 앞서 생성한 네트워크에 바인딩하며, dynamo-local 이라는 이름으로 실행됩니다.
```
docker run -d -p8000:8000 --network=local-api-network --name dynamo-local amazon/dynamodb-local
```
   
3. 앞서 설치한 NoSQLWorkBench 를 실행하면, 아래와 같이 실행이 됩니다.

<img src="./images/워크벤츠실행.PNG">

4. NoSQLWorkBench 에서 로컬 연결 설정을 합니다. **"[+ Add Connection]" 을 선택합니다.**
 
<img src="./images/워크벤츠에서로컬연결.PNG">

5. NoSQLWorkBench 에서 View Credential 을 선택 합니다. 해당 Credential 을 통해서 로컬 애플리케이션에서 AWS Dynamodb 로 연결할 수 있습니다.
 
<img src="./images/워크벤츠에서프로파일보기.PNG">

6. NoSQLWorkBench 에서 로컬 AWS Dynamodb 에 접속하기 위한 Credential 을 확인합니다.
 
<img src="./images/크레덴셜확인.PNG">

5. 로컬 환경의 AWS Dynamodb 를 CLI 를 통해서 액세스 하기 위한 Profile 정보를 셋팅 합니다.
```aws configure --profile dynamodb-local 을 실행하여 로컬 환경에서 실행합니다.```

## 기타참고
윈도우즈 환경에서 로컬에서 종료된 도커 컨테이너 삭제
```
FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm --force %i
```
