axios.post('https://jsonplaceholder.typicode.com/posts',
{
	userId: 1,
	title: 'new body'

}).then(rest =>{
	console.log(rest.data)
}).catch(err=>{
	console.log(err)
})

axios({
	method: 'POST',
	url: 'https://jsonplaceholder.typicode.com/posts',
	data:{
		userId: 1,
		title: 'new title',
		body: 'new body'
	}
}).then(rest =>{
	console.log(rest.data)
}).catch(err=>{
	console.log(err)
})

let x = document.querySelector('#demo');
let y = document.querySelector('.btn');

y.addEventListener('click',foo);
function foo(){
	axios.get('https://jsonplaceholder.typicode.com/users')
	.then(resp =>{
		console.log(resp.data);
		for(let key in resp.data){
			let z= document.createElement('br')
			x.append(`Name: ${resp.data[key].name}`,z)
		}
	}).catch(err=>{
		console.log(err)
	}).then(()=>{
		console.log('ok')
	});
}