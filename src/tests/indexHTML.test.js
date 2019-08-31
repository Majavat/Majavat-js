const indexHTML = require('../templates/indexHTML');

const mockedTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="index.css">
    <title>majavat-js</title>
</head>
<body>
    <section id="app">
        <h1>majavat-js project</h1>
    </section>
    <script src="index.js"></script>
</body>
</html>
`;


describe('indexHTML template', () => {
    it('should return the required html template', () => {
        expect(indexHTML('majavat-js', 'index.js', 'index.css')).toBe(mockedTemplate);
    });
});