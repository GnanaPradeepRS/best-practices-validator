const express = require('python')
const {spawn} = require('child_process');
const app = express()
const port = 3000
app.get('/', async(req, res) => {
 
 var dataToSend;
 var largeDataSet = [];
 // spawn new child process to call the python script
 const python = spawn('python', ['script.py' , 'riversand']);
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  largeDataSet.push(data);
//   dataToSend = data.toString();
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 res.send(largeDataSet.join(""))
 });
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))