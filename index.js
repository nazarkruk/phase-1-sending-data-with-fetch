// Add your code here

function submitData(name, email){
    return fetch(
        'http://localhost:3000/users', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({
              name: `${name}`,
              email: `${email}`
            })
        })
    .then (res => res.json())
    .then (data => {
        let p = document.createElement('p')
        p.innerHTML = `${data.id}`
        document.body.appendChild(p)


    })
    .catch(err=> {
        let p = document.createElement('p')
        p.innerHTML = `${err}`
        document.body.appendChild(p)
    })
}

