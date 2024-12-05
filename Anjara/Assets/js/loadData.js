// Charger et afficher les livres depuis book.json
// fetch('./Assets/data/book.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Erreur lors de la récupération du fichier JSON");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//         for(let i=0;i<=data.length;i++){

//         }
//         // const dataDiv = document.getElementById("data");
//         // dataDiv.innerHTML = data.map(book => `
//         //     <div class="book">
//         //         <h3>${book.title}</h3>
//         //         <p><strong>Auteur:</strong> ${book.author}</p>
//         //         <p><strong>ISBN:</strong> ${book.isbn}</p>
//         //         <p><strong>Publié le:</strong> ${book.published_date}</p>
//         //         <p><strong>Pages:</strong> ${book.pages}</p>
//         //         <img src="${book.cover}" alt="Couverture de ${book.title}" class="book-cover">
//         //         <p><strong>Langue:</strong> ${book.language}</p>
//         //     </div>
//         // `).join('');
//     })
//     .catch(error => {
//         console.error("Erreur :", error);
//         document.getElementById("data").innerHTML = "<p>Impossible de charger les données.</p>";
//     });
fetch('./Assets/data/book.json').then(response => {
    return response.json()
}).then(
    data => {
        console.log(data);
        let listBook = ""
        for (let i = 0; i < data.length; i++) {
            listBook += `
                <div class="book">
                      <h3>${data[i].title}</h3>
                      <p><strong>Auteur:</strong> ${data[i].author}</p>
                     <p><strong>ISBN:</strong> ${data[i].isbn}</p>
                     <p><strong>Publié le:</strong> ${data[i].published_date}</p>
                     <p><strong>Pages:</strong> ${data[i].pages}</p>
                     <img src="${data[i].cover}" alt="Couverture de ${data[i].title}" class="book-cover">
                    <p><strong>Langue:</strong> ${data[i].language}</p>
                    <a href="${data[i].path}">ouvrir : ${data[i].title}</a>
                 </div>
            `
        }
        console.log(listBook);
        document.getElementById("data").innerHTML=listBook
    }
)

