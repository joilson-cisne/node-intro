// A slight variation of the sample found here:
// http://nodejs.org/api/process.html#process_process_stdin

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    process.stdout.write(`Data -> ${chunk}`);
});

process.stdin.on('end', () => {
    process.stderr.write(`End!\n`);
});
