const fs = require('fs')
const { promiseHooks } = require('v8')

exports.fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return success(data)
        })
    })
}

exports.fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) return fail(err)
            return success()
        })
    })
}

exports.fileDelete = (filename) => {
    return new Promise((success, fail) => {
        fs.unlink(filename, data, (err) => {
            if (err) return fail(err)
            return success()
        })
    })
}
