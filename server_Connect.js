const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./DB_Connect'); // Import the database connection

const multer = require('multer'); //npm i multer
const path = require('path');

app.use(cors());
app.use(express.json());

// 이미지를 저장할 디렉토리와 파일 이름 설정
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// 이미지를 받을 수 있는 multer 미들웨어 생성
const upload = multer({ storage });

app.post('/api/post', upload.single('image'), (req, res) => {
  const data = JSON.parse(req.body.data); // 데이터 파싱

  //const formattedUploadTime = new Date(data.upload_time).toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO your_post (title, description, category, image_url, name, profile) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [data.title, data.description, data.category, req.file.path, data.name, data.profile];

  connection.query(query, values, (error, results, fields) => {
    if (error) {
      console.error('MySQL query error: ' + error.stack);
      res.status(500).json({ message: '게시물 등록에 실패했습니다.' });
    } else {
      console.log('MySQL query result:', results);
      res.set('Content-Type', 'application/json; charset=utf-8');
      res.json({ message: '게시물이 등록되었습니다.', data });
    }
  });
});





/*
app.get('/api/lookup/:postnum', async (req, res) => {
  const postnum = req.params.postnum;

  try {
    // MySQL 데이터베이스에서 사용자 정보 조회 쿼리 실행
    const query = 'SELECT * FROM your_post WHERE id = ?';
    const result = await pool.query(query, [postnum]);

    // 조회 결과에서 첫 번째 행을 사용자 객체로 변환
    const user = result[0][0];

    // 사용자 정보 반환
    res.json({ data: user });
  } catch (error) {
    console.error('Error fetching user from database:', error);
    res.status(500).json({ error: 'Error fetching user from database' });
  }
});
*/

app.get('/api/lookup', (req, res) => {
  connection.query("SELECT * FROM your_post", (err, data) => {
      if (err) {
          console.log('err');
          res.send(err);
      } else{
          console.log('success');
          res.send(data);
      }
  });
}); 

/*
app.get('/api/lookup/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM your_post WHERE id = ?', [id], (err, data) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).json({ error: 'Error fetching data from the database' });
    } else {
      console.log('Success');
      res.status(200).json(data[0]);
    }
    
  });
});*/
/* id 로 가져오기 성공한고
app.get('/api/lookup/:id', function(req,res,next) {
  var queryString = "SELECT * FROM your_post WHERE id = ?"
  var userId = req.params.id

  connection.query(queryString, [userId], (err,rows,fields) => {
    if(err){
      console.log(err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
*/
app.get('/api/lookup/:id', function(req,res,next) {
  var queryString = "SELECT * FROM your_post WHERE id = ?"
  var userId = req.params.id

  connection.query(queryString, [userId], (err,rows,fields) => {
    if(err){
      console.log(err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 동작 중입니다.`);
});
