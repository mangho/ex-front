var b = "b text"

function fns() {
    this.fnOne = function () {
            console.log("this is the test function 'fnOne'." + b)
        },
        this.fnTwo = function () {
            console.log("this is the test function 'fnTwo'.")
        }
}
class fn {
    constructor() {
        this.fnOne = function () {
                console.log("this is the test function 'fnOne'." + b)
            },
            this.fnTwo = function () {
                console.log("this is the test function 'fnTwo'.")
            }
    }
}
export default new fn