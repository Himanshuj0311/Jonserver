document.addEventListener('DOMContentLoaded', function () {
    const genderFilter = document.getElementById('genderFilter');
    const nameSearch = document.getElementById('nameSearch');
    const ageSort = document.getElementById('ageSort');
    const dogCards = document.getElementById('dogCards');
    const Token=localStorage.getItem("Token")

   if(Token) {
    function loadDogData() {
        const filterGender = genderFilter.value;
        const searchName = nameSearch.value.toLowerCase();
        const sortDirection = ageSort.value ;

       
        fetch(`https://dog-json.onrender.com/dogs`)
            .then(response => response.json())
            .then(data => {
                let filteredData = data;
                console.log(filteredData)

                // Filter by gender
                if (filterGender !== 'all') {
                    filteredData = filteredData.filter(dog => dog.gender === filterGender);
                    console.log(filterGender)
                }

                // Search by name
                if (searchName !== '') {
                    filteredData = filteredData.filter(dog => dog.name.toLowerCase().includes(searchName));
                }

                // Sort by age
               if(sortDirection==="asc"){
                filteredData.sort((a, b) => a.age -b.age);
               // displayDogCards(filteredData);
               }
              else if(sortDirection==="desc"){
                filteredData.sort((a, b) => b.age -a.age);
              //  displayDogCards(filteredData);
               }
                
                displayDogCards(filteredData);
            });
    }}
    else{
        alert("Login Frist")
    }

   
    function displayDogCards(data) {
        dogCards.innerHTML = ''; 

        data.forEach(dog => {
            const card = document.createElement('div');
            card.classList.add('dog-card');
            card.innerHTML = `
            <img src="data:image/jpeg;base64,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" alt="dog">

                <h2>${dog.name}</h2>
                <p>Age: ${dog.age}</p>
                <p>Gender: ${dog.gender}</p>
                <p>Place: ${dog.place}</p>
                <button class="edit-button" data-id="${dog.id}">Edit</button>
                <button class="delete-button" data-id="${dog.id}">Delete</button>
            `;

            
            const editButton = card.querySelector('.edit-button');
            const deleteButton = card.querySelector('.delete-button');
            
            editButton.addEventListener('click', function() {
                localStorage.setItem("ID",dog.id)
                window.location.href="./edit.html"}
            );
            deleteButton.addEventListener('click', () => deleteDog(dog.id));

            dogCards.appendChild(card);
        });



        function deleteDog(id){
            fetch(`https://dog-json.onrender.com/dogs/${id}`,{
                method:"DELETE"
            }).then(()=>{
                loadDogData()
            })
        }
    }

    
    loadDogData();
});
