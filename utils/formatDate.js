// timestamp formatting using npm package date-fns
const { format } = require('date-fns');

function formatTimestamp(timestamp) {
    return format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');
}

module.exports = { formatTimestamp };