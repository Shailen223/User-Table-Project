document.addEventListener('DOMContentLoaded', getData);

function getData() {
  fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#data-table tbody');
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.postId}</td>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.body}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.log(error));
}
