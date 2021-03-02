// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {

    console.log(req);
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {

        console.log(`req user found and moving to next route - 
                   ${JSON.stringify(req.user)}`)


        return next();
    }

    // If the user isn't logged in, redirect them to the login page
    console.log("no USER REQ")
    return res.redirect("/");
};