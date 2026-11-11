// const fs=require('fs');
// const writestream=fs.CreateWriteStream('hello.txt')
// writestream.write("hello");
// writestream.write("Node.js");
// writestream.write("Welcome");
// writestream.end();


const {Duplex}=require('stream');
const duplexstream=new Duplex({
    read(size){
        this.push("Hello Node.js");
        this.push(null);

    },

    write(chunk,encoding,callback){
        console.log("Recieved chunk:",chunk.tostring());
        callback();

    }
});

duplexstream.on('data',(chunk)=>{
console.log("Reacieved:",chunk.tostring());

});

duplexstream.write("client Message");
duplexstream.end();