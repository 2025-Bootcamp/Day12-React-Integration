import { createServer } from 'http';

// 创建 HTTP 服务器
const server = createServer((req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 设置响应头
  res.setHeader('Content-Type', 'application/json');

  // 模拟数据 - 返回一个 JSON 数组
  const data = [
    { id: 1, title: '学习 React', completed: false },
    { id: 2, title: '学习 Node.js', completed: true },
    { id: 3, title: '学习 CORS', completed: false },
    { id: 4, title: '完成项目', completed: false }
  ];

  // 返回 JSON 数据
  res.writeHead(200);
  res.end(JSON.stringify(data, null, 2));
});

// 监听端口
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log('按 Ctrl+C 停止服务器');
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n正在关闭服务器...');
  server.close(() => {
    console.log('服务器已关闭');
    process.exit(0);
  });
});
