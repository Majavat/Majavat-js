const indexHTML = (title, js, css) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="${css}">
    <title>${title}</title>
</head>
<body>
    <section id="app">
        <h1>${title} project</h1>
    </section>
    <script src="${js}"></script>
</body>
</html>
`;

module.exports = indexHTML;

