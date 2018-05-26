const { API } = process.env
module.exports = (url) => fetch(`${API}/${url}`).then(r => r.json())