
var a = 2
var b =3

// fungsi penambahan
function tambah(a, b){
  console.log(a+b);
}

// fungsi execute callback
function execute(a, b, callback){
// callback functionreturn callback(a, b)
}
// eksekusi
execute(a, b, tambah)

// async await
async function fetchDataAsync() {
    try {
      const response = await fetch('/endpoint');
      const summary = await response.text();
      console.log(summary);
    } catch (error) {
      console.log('Error:' + error.message);
    }
  }
  
  // Call fetchDataAsync()
  fetchDataAsync();

// penggunaan list
  //route for teacher list
router.get('/teacherlist',function (req,res,next) {
    User.find(function(err, teachers) {
        res.render('user/userList', {title: 'user list',teachers:teachers}); 
    });
});

// menerima input dari user
const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});