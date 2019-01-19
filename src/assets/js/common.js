
function fns() {
    this.fnOne = function (b) {
            console.log("this is the test function 'fnOne'. - param: " + b)
        },
        this.fnTwo = function () {
            console.log("this is the test function 'fnTwo'.")
        }
}
class fn {
    constructor() {
        this.fnOne = function (param) {
                 console.log("this is the test function 'fnOne'. - param: " + param)
            },
            this.fnTwo = function () {
                console.log("this is the test function 'fnTwo'.")
            }
    }
}
export default new fn