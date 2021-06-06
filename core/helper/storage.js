
const storage = {
    addLocalStorage: function (key, value) {
        localStorage.setItem(key, value)
        console.log(key + ' cookie added.', '/helper/storage.js')
    },

    removeLocalStorage: function (key) {
        localStorage.removeItem(key)
        console.log(key + ' cookie deleted..', '/helper/storage.js')
    },

    getLocalStorage: function (cookieName) {
        try {
            const result = localStorage.getItem(cookieName)
            return result
        } catch (e) {
            return null
        }
    }
}

export default storage