const Koa = require("koa");
const serve = require("koa-static");
const app = new Koa();
const proxy = require("koa2-proxy-middleware");

const options = {
  targets: {
    "/api/(.*)": {
      target: "https://www.mxnzp.com/api",
      changeOrigin: true,
      pathRewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};

app.use(proxy(options));
app.use(serve(__dirname + "/dist"));
app.listen(3000, function () {
  console.log("服务启动成功,端口3000");
});
