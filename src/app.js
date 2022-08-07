const express = require('express')
var sql = require('mssql/msnodesqlv8');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
var router = require("express").Router();
var cors = require('cors')
app.use(cors());
//var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
var i = 0;
//var bodyParser = require('body-parser')
//var app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

const dbconfig = {
    server: 'DESKTOP-79UD9B5',
    user: 'sa',
    password: 'rimpadey',
    driver: "msnodesqlv8",
    database: 'Drasian',
    port: 1433
}


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.listen(3000, (req, res) => {
    console.log("App running")
})

app.get('/getData', (req, res) => {
    res.json({
        "status": 200,
        "statusMessage": "Success"
    })
})

app.get('/getRecentAiringDramas/:currentYear', (req, res) => {
   

     //var query = 
    var conn = new sql.ConnectionPool(dbconfig);
        conn.connect().then(function () {
            var request = new sql.Request(conn);
           // var term =req.params.name
            request.input('currentYear',sql.VarChar,req.params.currentYear).query('SELECT * FROM DrasianCombinedFinal  WHERE YEAR([first_air_date]) = @currentYear'  ).then(function (recordSet) {
               // console.log(recordSet);
                conn.close();
                res.send(recordSet["recordset"]);
                
            }).catch(function (err) {
                console.log(err);
                conn.close();
            });
        }).catch(function (err) {
            console.log(err);
        });
})

app.get('/getRecommendations/:id', (req, res) => {
   
    console.log(req.params.id)
        //var query = 
       var conn = new sql.ConnectionPool(dbconfig);
           conn.connect().then(function () {
               var request = new sql.Request(conn);
              // var term =req.params.name
               request.input('id',sql.VarChar,req.params.id).query('SELECT * FROM [DrasianRecommendationsFinal] WHERE MainDramaId = @id'  ).then(function (recordSet) {
                   console.log(recordSet);
                   conn.close();
                   res.send(recordSet["recordset"]);
                   
               }).catch(function (err) {
                     console.log(err);
                   conn.close();
               });
           }).catch(function (err) {
               console.log(err);
           });
    })
    

app.get('/getAdditionalDetils/:id', (req, res) => {
   
console.log(req.params.id)
    //var query = 
   var conn = new sql.ConnectionPool(dbconfig);
       conn.connect().then(function () {
           var request = new sql.Request(conn);
          // var term =req.params.name
           request.input('id',sql.VarChar,req.params.id).query('SELECT * FROM DrasianFetchTitleInfoFinal WHERE id = @id'  ).then(function (recordSet) {
              // console.log(recordSet);
               conn.close();
               res.send(recordSet["recordset"]);
               
           }).catch(function (err) {
               console.log(err);
               conn.close();
           });
       }).catch(function (err) {
           console.log(err);
       });
})



app.get('/getAllDistinctID', (req, res) => {
   
    //console.log(req.params.id)
        //var query = 
       var conn = new sql.ConnectionPool(dbconfig);
           conn.connect().then(function () {
               var request = new sql.Request(conn);
              // var term =req.params.name
               request.query('select distinct id from [DrasianCombinedFinal]'  ).then(function (recordSet) {
                  // console.log(recordSet);
                   conn.close();
                   res.send(recordSet["recordset"]);
                   
               }).catch(function (err) {
                   console.log(err);
                   conn.close();
               });
           }).catch(function (err) {
               console.log(err);
           });
    })
    

//  app.post('/postDramaData', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
//     let i=0
//     if (req.body) {
    
//         console.log(req.body.length)

//         // var backdrop_path,first_air_date,genre_ids,id,name,origin_country,original_language,original_name,overview,popularity,poster_path,vote_average,vote_count;
//         // backdrop_path=req.body[i].backdrop_path
//         // first_air_date=req.body[i].first_air_date
//         // genre_ids=req.body[i].genre_ids
//         // id=req.body[i].id
//         // name=req.body[i].name
//         // origin_country= req.body[i].origin_country
//         // original_language=req.body[i].original_language
//         // original_name=req.body[i].original_name
//         // overview =req.body[i].overview ,
//         // popularity=req.body[i].popularity 
//         // poster_path=req.body[i].poster_path
//         // vote_average=req.body[i].vote_average
//         // vote_count=req.body[i].vote_count

//         // request.query("insert into myTable ([DATE],[PackageName]) values ('" + date + "','" + pName + "')")
//        // var query = "INSERT INTO DrasianAllDataDrama2(backdrop_path,first_air_date,genre_ids,id,name,origin_country,original_language,original_name,overview,popularity,poster_path,vote_average,vote_count) VALUES ( '" + req.body[i].backdrop_path + "','" + req.body[i].first_air_date + "','" + req.body[i].genre_ids + "','" + req.body[i].id + "','" + req.body[i].name + "','" + req.body[i].origin_country + "','" + req.body[i].original_language + "','" + req.body[i].original_name + "','" + req.body[i].overview + "','" + req.body[i].popularity + "','" + req.body[i].poster_path + "','" + req.body[i].vote_average + "','" + req.body[i].vote_count + "')"
// for(let i=0;i<req.body.length;i++){

//   var query = "INSERT INTO DrasianAllDataDrama2(backdrop_path,first_air_date,genre_ids,id,name,origin_country,original_language,original_name,overview,popularity,poster_path,vote_average,vote_count) VALUES (@backdrop_path,@first_air_date,@genre_ids,@id,@name,@origin_country,@original_language,@original_name,@overview,@popularity,@poster_path,@vote_average,@vote_count )"
//         var conn =  new sql.ConnectionPool(dbconfig);
       
//         conn.connect().then(function () {
//             var request =  new sql.Request(conn);
//             request
//             .input('backdrop_path', sql.VarChar,req.body[i].backdrop_path)
//             .input('first_air_date',sql.VarChar,req.body[i].first_air_date)
//             .input('genre_ids',sql.VarChar,req.body[i].genre_ids)
//             .input('id',sql.VarChar,req.body[i].id)
//             .input("name",sql.VarChar,req.body[i].name)
//             .input("origin_country",sql.VarChar,req.body[i].origin_country)
//             .input("original_language",sql.VarChar,req.body[i].original_language)
//             .input("original_name",sql.VarChar,req.body[i].original_name)
//             .input("overview" ,sql.VarChar,req.body[i].overview)
//             .input("popularity",sql.VarChar,req.body[i].popularity)
//             .input("poster_path",sql.VarChar,req.body[i].poster_path)
//             .input("vote_average",sql.VarChar,req.body[i].vote_average)
//             .input("vote_count",sql.VarChar,req.body[i].vote_count)
//             .query(query).then(function (recordSet) {
//                 console.log("After Query", i, req.body[i].first_air_date);
               
//             })
//         .catch(function (err) {
//                 console.log(err);
//                 //conn.close();
//             });
//         }).catch(function (err) {
//             console.log(err);
//         }).finally(function (err){
//             //conn.close();
//         })
      
//     }
        

//     }
// })


