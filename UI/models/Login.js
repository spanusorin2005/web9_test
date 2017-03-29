function Login(options) {
    this.email = options.email;
    this.pass = options.pass;
}

Login.prototype.signIn = function(){
    // //do the login request to the server
    // // prepare the data to send to the server
    // var userData = {
    //     email:this.email,
    //     pass: this.pass
    // }
    // var req = new XMLHttpRequest();
    // req.open("POST","https://web9-siitwebcluj.c9users.io/curs21-PHP-API/login");
    // req.setRequestHeader("Content-type","application/json");

    // // convert to string the data before sending it to the server
    // var strUserData = JSON.stringify(userData);
    // // send the request to the server with the stringified data
    // req.send(strUserData);
    var that = this;
    var config = {
        url: "https://web9-spinusorin.c9users.io/curs21-PHP-API/login",
        method: "POST",
        data:{
            email:this.email,
            pass:this.pass
        },
        dataType: "json",
        success: function(resp){
            if (resp) {
                that.isLogged = resp.isLogged || false;
            }
        },
        error: function(xhr, status, error) {
            alert("Oops!Something is wrong " + error);
        },
        complete: function(){
            console.log("The request is complete");
        }
    }
    // singIn method will return the jqXHR object returned by
    // the ajax request
    return $.ajax(config);
}