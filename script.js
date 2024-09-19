document.addEventListener('DOMContentLoaded', () => {
    // Toggle active view for list/grid view buttons
    const listViewBtn = document.querySelector('.view-list');
    const gridViewBtn = document.querySelector('.view-grid');
  
    listViewBtn.addEventListener('click', () => {
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      // Change to list view logic here
    });
  
    gridViewBtn.addEventListener('click', () => {
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
      // Change to grid view logic here
    });
  
    // Add more JS logic for filters, sort, etc., if needed.
  });
  

  // Array of lead data
const leads = [
    {
      name: "Ankit Sharma",
      email: "email@example.com",
      phone: "+91 **********678",
      work: "Lorem Ipsum",
      date: "Oct 12, 2023, 12:00 PM",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Rahul Verma",
      email: "email2@example.com",
      phone: "+91 **********123",
      work: "Lorem Ipsum",
      date: "Oct 13, 2023, 3:00 PM",
      avatar: "https://via.placeholder.com/40"
    },
    {
      name: "Priya Singh",
      email: "email3@example.com",
      phone: "+91 **********456",
      work: "Lorem Ipsum",
      date: "Oct 14, 2023, 2:30 PM",
      avatar: "https://via.placeholder.com/40"
    },
    {
        name: "Priya Singh",
        email: "email3@example.com",
        phone: "+91 **********456",
        work: "Lorem Ipsum",
        date: "Oct 14, 2023, 2:30 PM",
        avatar: "https://via.placeholder.com/40"
      },
      {
        name: "Priya Singh",
        email: "email3@example.com",
        phone: "+91 **********456",
        work: "Lorem Ipsum",
        date: "Oct 14, 2023, 2:30 PM",
        avatar: "https://via.placeholder.com/40"
      },
    // Add more leads as needed
  ];
  
  // Function to dynamically create and append rows to the table
  function populateTable() {
    const tbody = document.getElementById('leads-tbody');
    leads.forEach(lead => {
      // Create a new table row
      const row = document.createElement('tr');
  
      // Checkbox cell
      const checkboxCell = document.createElement('td');
      checkboxCell.innerHTML = '<input type="checkbox">';
      row.appendChild(checkboxCell);
  
      // Lead info cell
      const nameCell = document.createElement('td');
      nameCell.innerHTML = `
        <div class="lead-info">
          <img src="${lead.avatar}" alt="Avatar">
          <div>
            <p>${lead.name}</p>
            <small>${lead.date}</small>
          </div>
        </div>
      `;
      row.appendChild(nameCell);
  
      // Email cell
      const emailCell = document.createElement('td');
      emailCell.innerHTML = `<p><strong>${lead.email}</strong></p>`;
      row.appendChild(emailCell);
  
      // Phone number cell
      const phoneCell = document.createElement('td');
      phoneCell.textContent = lead.phone;
      row.appendChild(phoneCell);
  
      // Work cell
      const workCell = document.createElement('td');
      workCell.textContent = lead.work;
      row.appendChild(workCell);
  
      // Purchase button cell
      const purchaseCell = document.createElement('td');
      purchaseCell.innerHTML = '<button class="details-btn">View Details</button>';
      row.appendChild(purchaseCell);
  
      // Append the row to the table body
      tbody.appendChild(row);
    });
  }
  
  // Call the function to populate the table
  populateTable();
  