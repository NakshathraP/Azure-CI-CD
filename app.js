const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send(`
            <!DOCTYPE html>
            <html>
            <head>
            <style>
            html {height: 100%; width:100%}
            body {background: #0D343A;
                background:-webkit-gradient(linear, 0% 0%, 0%, 100%, from(rgba(13,52,58,1)), to (#000000));
                background:-moz-linear-gradient(top, rgba(13,52,58,1) 0%, rgba(0,0,0,1) 100%);
                overflow: hidden;
            }
            .drop {
            /*
            background:-webkit-gradient(linear, 0% 0%, 0%, 100%, from(rgba(13,52,58,1)), to (rgba(255,255,255,0.6)));
            background:-moz-linear-gradient(top, rgba(13,52,58,1) 0%, rgba(255,255,255,0.6) 100%);
            */
            background: #FFFFFF;
            width: 1px;
            height: 89px;
            position: absolute;
            bottom: 200px;
            -webkit-animation: fall .63s linear infinite;
            -moz-animation: fall .63s linear infinite;
            }
            
            @-webkit-keyframes fall { to {margin-top: 900px;}}
            @-moz-keyframes fall { to {margin-top: 900px;}}

            .center-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            text-align: center;
            font-family: Arial, sans-serif;
            color: #333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
                    
            </style>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script>
            var nbDrop = 800;
            
            function randRange(maxNum, minNum) {
                return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
            }
            
            function createRain() {
                for (i = 0; i < nbDrop; i++) {
                
                var dropLeft = randRange(0, 3000);
                var dropTop = randRange(-1000, 1000);
                $('.rain').append('<div class="drop" id="drop'+ i +'"></div>');
                $('#drop' + i).css('left', dropLeft);
                $('#drop' + i).css('top', dropTop); 
                }
            }
            </script>
            </head>
            <body onload="createRain()">
            <section id="rain" class="rain"></section>
            <div class="center-box">
            <h2>DevOps CIA</h2>
            <p>Text in the box!</p>
            </div>
            </body>
            </html>`
    );
})

app.listen(8080, () => {
    console.log("Application is running at Port: 3000");
})