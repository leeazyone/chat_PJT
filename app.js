const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false) // 치트키 추가
require('dotenv').config() // 환경변수 관리 모듈
const cors = require('cors')
const app = express() // 앱 생성
app.use(cors()) // 어떤 주소로든 접근 허용

// 데이터베이스와 연결
mongoose
  .connect(process.env.DB) // db를 읽어와라
  .then(() => console.log('connected to database')) // 연결이 됐다면 메세지 띄우기
  .catch((err) => console.log('Database connection error:', err)) // 연결 오류 출력

console.log('DB URI:', process.env.DB) // DB URI 출력

module.exports = app
