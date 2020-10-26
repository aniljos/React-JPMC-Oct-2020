
var user = {
    id: 1,
    print: function(msg){
        console.log("Id: ", this.id, msg);
    }
}

user.print("abc");

var emp = {
    id: 20
};

//emp.print();

const empPrint = user.print.bind(emp);
empPrint("xyz");