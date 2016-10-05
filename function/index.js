'use strict';

const spawn = require('child_process').spawn;

exports.helloGET = function beaver(req, res) {
    const child = spawn('./third_party/dart-linux-x64/dart',
        [
            'hello.dart.snapshot',
            req.path,
            JSON.stringify(req.headers),
            JSON.stringify(req.body)
        ],
        {
            env: {LD_LIBRARY_PATH: './third_party/glibc-2.15-lib'}
        }
    );

    child.stdout.on('data', (data) => {
        data = String(data);
        console.log(`stdout: ${data}`);
        res.send(data);
    });

    child.stderr.on('data', (data) => {
        data = String(data);
        console.log(`stderr: ${data}`);
    });

    child.on('exit', (code) => {
        console.log(`child process exited with code ${code}`);
        res.status(200).end();
    });
};
