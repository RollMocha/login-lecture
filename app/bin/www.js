"use strict";
const app = require("../app");//"../"은 상의 폴더 들고 옴
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});