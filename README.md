# backendAssignment
Step 1: Do npm install 
Step 2: Do node app
Step 3: to get userDetail
    url: localhost:8080/userDetail
    method: Get
Step 4: To add user 
    url: localhost:8080/userDetail
    method: POST
    request payload: {
	"name": "alishan ahamad",
	"email": "engineer.alishan@gmail.com",
	"contact": "9175787878",
	"password": "helloworld"
}
Step 5: update user detail
    url: localhost:8080/userDetail/userId
    POST: {
	"password": "alishan"
}
Step 6: Delete user detail
    url: localhost:8080/userDetail/userId
    method: DELETE