start at 10.14.21 14:07

** 001 :express / babel setting
> - npm init -y
> - npm i express
> - npm i @babel/node -D          : babel
> - npm i @babel/preset-env -D    : preset 중 하나
> - npm i @babel/core -D          : babel 실행
> - CREATE .babelrc or babel.config.json FILE-SAME_PATH package.json  : babel 설정파일, preset 과 연결해주는 역할

** 002 :mongodb setting / dotenv
> - npm i mongoose
> - mongo >> show dbs >> use DBNAME >> show collections >> db.COLLECTIONNAME(model).find()
> - mongodb way
>>  0) mongoose.connect & .connection .on & .once
>>  1) mongoose.Schema & .model('DBNAME',schema) --> export default model
>>  2) (1)을 import, exports.create=(req,res)=>{new DB 정의&DB이용한res}) : mongoose func 정의
>>  3) (2)을 import, route 에 맞는 mongoose func 사용 
>>  4) (0)을 app.listen file 에 import
> - dotenv way : 모든 값은 문자열로 취급됨(공백포함)
>>  0) CREATE .env FILE
>>  1) import dotenv & dotenv.config() or ({path:'.env 포함한 경로'})

** 003 :youtube layout- custom element(tag)
> COMMENT_LO.txt
> elements.js







