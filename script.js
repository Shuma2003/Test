async function getUsers(url){
    const res = await fetch(url)
    const data = res.json()
    return data
  }
  
  
  
  function elemDelete(id){
    const elem = document.getElementById(`num${id}`)
    elem.remove()
  }
  
  async function getData(){
    const body = document.getElementById('body')
    const dataArr = await getUsers('https://jsonplaceholder.typicode.com/users')
    dataArr.map(obj => {
      console.log(obj)
      body.insertAdjacentHTML('afterbegin', ` <div id="num${obj.id}" class="feature col">     
                                            <h3 class="fs-2 text-body-emphasis">${obj.name}</h3>
                                            <p>${obj.phone}</p>
                                            <p>${obj.email}</p>
                                            <button onclick=elemDelete(${obj.id}) class="btn btn-danger">Delete</button>
                                            </div>`)
    })
    
  }
  getData()

  async function createPost(){
    let title = document.getElementsByClassName('title')
let text = document.getElementsByClassName('text')  
}
