//fill profiles into the home page
Profiles.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                <td>${order.photo}</td>
                <td>${order.name}</td>
                <td>${order.statement}</td>
                <td>${order.education}</td>
                <td>${order.hobbies}</td>
                <td><a href="#"><b>Connect</b></td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})