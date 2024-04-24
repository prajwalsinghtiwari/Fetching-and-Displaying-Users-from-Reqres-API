document.addEventListener("DOMContentLoaded", function() {
    const fetchUsersBtn = document.getElementById('fetch-users-btn');
    fetchUsersBtn.addEventListener('click', fetchUsers);

    function fetchUsers() {
        fetch('https://reqres.in/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayUsers(data.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    function displayUsers(users) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; 

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name} Avatar`;

            const name = document.createElement('p');
            name.textContent = `${user.first_name} ${user.last_name}`;

            const email = document.createElement('p');
            email.textContent = user.email;

            userCard.appendChild(avatar);
            userCard.appendChild(name);
            userCard.appendChild(email);

            userList.appendChild(userCard);
        });
    }
});
