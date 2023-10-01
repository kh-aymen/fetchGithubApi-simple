const form = document.getElementById('myform')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    var search = document.getElementById('search').value
    var originalName = search.split(' ').join('').trim()
    document.getElementById('result').innerHTML = ''

    fetch(`https://api.github.com/users/${originalName}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            document.getElementById('result').innerHTML =
                `
                <h4>Click image</h4>
                <a href="https://github.com/${originalName}" target='_blank' >
                    <img src="${data.avatar_url}" alt="">
                 </a>
                `
        })

})