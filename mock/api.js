import multer from 'multer';

const upload = multer();

export default [
  {
    url: '/api/hello',
    method: 'get',
    rawResponse: (req, res) => {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.end('<h1>Hello, HMPL!</h1>');
    },
  },
  {
    url: '/api/hello',
    method: 'post',
    rawResponse: (req, res) => {
      upload.any()(req, res, (err) => {
        const formData = req.body;
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(`<p>Hello ${formData.name}</p>`);
      });
    },
  },
  {
    url: '/api/error',
    method: 'get',
    rawResponse: (req, res) => {
      // Immediately end the response without sending headers
      res.socket.destroy(new Error('Network error'));
    },
  }
];