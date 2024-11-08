// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.w3-container');
  sections.forEach(section => section.classList.add('hidden'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.w3-bar-item');
  buttons.forEach(button => button.classList.remove('active'));

  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = '';

  if (sectionId === 'courseInfo') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#classInfo">Thông tin khai giảng</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#seminar">Thông tin Seminar</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#company">Thông tin công ty quan tâm</a>
  `;
  } else if (sectionId === 'info') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Thông tin môn học</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#summaryVN">Mô tả tóm tắt học phần (tiếng Việt) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#summaryEN">Mô tả tóm tắt học phần (tiếng Anh) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#contentVN">Nội dung tóm tắt học phần (tiếng Việt) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#contentEN">Nội dung tóm tắt học phần (tiếng Anh) (*)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#reference">Sách tham khảo</a>

  `;
  } else if (sectionId === 'web-tech') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Công nghệ Web</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#frontend">1. Frontend (Giao diện người dùng)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#backend">2. Backend (Máy chủ và xử lý dữ liệu)</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#database">3. Cơ sở dữ liệu</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#api">4. API và Tích hợp dịch vụ</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#devops">5. DevOps và Triển khai</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#security">6. Bảo mật</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#testing">7. Testing và Debugging</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#optimization">8. Performance Optimization</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#authentication">9. User Authentication & Authorization</a>
  `;
  } else if (sectionId === 'student-info') {
    sidebar.innerHTML = `
    <h4 class="w3-bar-item"><b>Thông tin sinh viên</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#academic-info">Thông tin học tập</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#skills-info">Kĩ năng</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#projects-info">Dự án</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#hobbies-info">Sở thích</a>
  `;
  } else if (sectionId === 'admin-page') {
    sidebar.innerHTML = `
  `;
  }

  // Add active class to clicked button
  event.target.classList.add('active');
}
// window.onload = function () {
//   showContent('courseInfo');
// };

// Initialize menu items with ID and display name pairs
let menuItems = [
  { id: "info", name: "Thông tin môn học" },
  { id: "web-tech", name: "Các công nghệ web" },
  { id: "student-info", name: "Thông tin sinh viên" }
];

// Display name mapping for static pages
const menuDisplayNames = {
  "courseInfo": "Trang chủ",
  "admin-page": "Admin Page"
};

const menuTable = document.getElementById("adminMenuTable");
const topMenuBar = document.querySelector(".w3-top .w3-bar");

// Utility function to generate ID from name
function generateIdFromName(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

// Function to render the Admin Page menu list
function renderAdminMenu() {
  // Clear existing rows, keeping the "Trang chủ" row intact
  menuTable.innerHTML = `
      <tr>
          <th>Menu Item</th>
          <th>Actions</th>
      </tr>
      <tr>
          <td>${menuDisplayNames["courseInfo"]}</td>
          <td>
              <button onclick="viewMenuItem('courseInfo')"><i class="fa fa-eye"></i></button>
              <button disabled><i class="fa fa-pencil-alt"></i></button>
              <button disabled><i class="fa fa-trash"></i></button>
              <button onclick="addMenuItem('courseInfo')"><i class="fa fa-plus"></i></button>
          </td>
      </tr>`;

  // Loop through menuItems to add each dynamic row with action buttons
  menuItems.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.name}</td>
          <td>
              <button onclick="viewMenuItem('${item.id}')"><i class="fa fa-eye"></i></button>
              <button onclick="editMenuItem(${index})"><i class="fa fa-pencil-alt"></i></button>
              <button onclick="deleteMenuItem(${index})"><i class="fa fa-trash"></i></button>
              <button onclick="addMenuItem('${item.id}')"><i class="fa fa-plus"></i></button>
          </td>`;
      menuTable.appendChild(row);
  });
}


// Function to update the top menu bar based on menuItems array
function updateTopMenu() {
  topMenuBar.innerHTML = `
      <a href="javascript:void(0)" onclick="showContent('courseInfo')" class="w3-bar-item w3-button">
          <i class="fas fa-home"></i> ${menuDisplayNames["courseInfo"]}
      </a>
      ${menuItems.map(item => `
          <a href="javascript:void(0)" onclick="showContent('${item.id}')" class="w3-bar-item w3-button">
              ${item.name}
          </a>
      `).join('')}
      <a href="javascript:void(0)" onclick="showContent('admin-page')" class="w3-bar-item w3-button">
          ${menuDisplayNames["admin-page"]}
      </a>
  `;
}

// Add a new menu item with a name, automatically generating the ID
function addMenuItem(afterItemId) {
  const newItemName = prompt("Enter new menu item name:");
  if (newItemName) {
      const newItemId = generateIdFromName(newItemName);
      
      // Ensure the ID is unique
      if (!menuItems.some(item => item.id === newItemId) && newItemId !== "admin-page") {
          const index = menuItems.findIndex(item => item.id === afterItemId) + 1;
          menuItems.splice(index, 0, { id: newItemId, name: newItemName });
          updateTopMenu();
          renderAdminMenu();
      } else {
          alert("Invalid or duplicate menu item name.");
      }
  }
}

// Edit an existing menu item name without changing its ID
function editMenuItem(index) {
  const currentName = menuItems[index].name;
  const newItemName = prompt("Edit menu item name:", currentName);
  
  if (newItemName) {
      // Ensure the new name does not conflict with existing names
      if (!menuItems.some(item => item.name === newItemName)) {
          // Update only the name of the menu item
          menuItems[index].name = newItemName;
          updateTopMenu();
          renderAdminMenu();
      } else {
          alert("A menu item with this name already exists.");
      }
  }
}

// Delete a menu item by ID
function deleteMenuItem(index) {
    if (confirm(`Are you sure you want to delete the menu item "${menuItems[index]}"?`)) {
        menuItems.splice(index, 1);
        updateTopMenu();
        renderAdminMenu();
    }
}

// Initial load: render admin menu and update top menu
window.onload = function() {
    renderAdminMenu();
    updateTopMenu();
};

// Variable to store the current top menu item being viewed
let currentTopMenuItemId = null;

// Data structure to store left menu items for each top menu item
const leftMenuItems = {
  "courseInfo": [
      { id: "classInfo", name: "Thông tin khai giảng", href: "#classInfo" },
      { id: "seminar", name: "Thông tin Seminar", href: "#seminar" },
      { id: "company", name: "Thông tin công ty quan tâm", href: "#company" }
  ],
  "info": [
      { id: "summaryVN", name: "Mô tả tóm tắt học phần (tiếng Việt) (*)", href: "#summaryVN" },
      { id: "summaryEN", name: "Mô tả tóm tắt học phần (tiếng Anh) (*)", href: "#summaryEN" },
      { id: "contentVN", name: "Nội dung tóm tắt học phần (tiếng Việt) (*)", href: "#contentVN" },
      { id: "contentEN", name: "Nội dung tóm tắt học phần (tiếng Anh) (*)", href: "#contentEN" },
      { id: "reference", name: "Sách tham khảo", href: "#reference" }
  ],
  "web-tech": [
      { id: "frontend", name: "1. Frontend (Giao diện người dùng)", href: "#frontend" },
      { id: "backend", name: "2. Backend (Máy chủ và xử lý dữ liệu)", href: "#backend" },
      { id: "database", name: "3. Cơ sở dữ liệu", href: "#database" },
      { id: "api", name: "4. API và Tích hợp dịch vụ", href: "#api" },
      { id: "devops", name: "5. DevOps và Triển khai", href: "#devops" },
      { id: "security", name: "6. Bảo mật", href: "#security" },
      { id: "testing", name: "7. Testing và Debugging", href: "#testing" },
      { id: "optimization", name: "8. Performance Optimization", href: "#optimization" },
      { id: "authentication", name: "9. User Authentication & Authorization", href: "#authentication" }
  ],
  "student-info": [
      { id: "academic-info", name: "Thông tin học tập", href: "#academic-info" },
      { id: "skills-info", name: "Kĩ năng", href: "#skills-info" },
      { id: "projects-info", name: "Dự án", href: "#projects-info" },
      { id: "hobbies-info", name: "Sở thích", href: "#hobbies-info" }
  ]
};


// Utility function to render left menu items for the selected top menu
function renderAdminLeftMenu() {
    const leftMenuTable = document.getElementById("adminLeftMenuTable");
    leftMenuTable.innerHTML = `
        <tr>
            <th>Left Menu Item</th>
            <th>Actions</th>
        </tr>`;

    const items = leftMenuItems[currentTopMenuItemId] || [];
    
    items.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button onclick="viewLeftMenuItem('${item.id}', '${currentTopMenuItemId}')"><i class="fa fa-eye"></i></button>
                <button onclick="editLeftMenuItem(${index})"><i class="fa fa-pencil-alt"></i></button>
                <button onclick="deleteLeftMenuItem(${index})"><i class="fa fa-trash"></i></button>
                <button onclick="addLeftMenuItemAfter(${index})"><i class="fa fa-plus"></i></button>
            </td>`;
        leftMenuTable.appendChild(row);
    });

    // Show a message if there are no items, with an option to add the first item
    if (items.length === 0) {
        leftMenuTable.innerHTML += `
            <tr>
                <td colspan="2" style="text-align:center;">No items. Click + to add the first menu item.</td>
            </tr>`;
    }
}

// Function to show the "Admin menu left" page for a selected top menu item
function showAdminLeftMenu(topMenuItemId) {
    currentTopMenuItemId = topMenuItemId;
    document.getElementById("admin-page").classList.add("hidden");
    document.getElementById("admin-menu-left").classList.remove("hidden");

    // Update the header with the current top menu name
    document.getElementById("current-top-menu-name").textContent = menuDisplayNames[topMenuItemId] || "Menu";
    renderAdminLeftMenu();
}

// Function to add a new left menu item (when no items exist or adding as the first item)
function addLeftMenuItem() {
    const newItemName = prompt("Enter new left menu item name:");
    if (newItemName) {
        const newItemId = generateIdFromName(newItemName);
        leftMenuItems[currentTopMenuItemId].push({ id: newItemId, name: newItemName });
        renderAdminLeftMenu();
    }
}

// Function to add a new left menu item after an existing item
function addLeftMenuItemAfter(index) {
    const newItemName = prompt("Enter new left menu item name:");
    if (newItemName) {
        const newItemId = generateIdFromName(newItemName);
        leftMenuItems[currentTopMenuItemId].splice(index + 1, 0, { id: newItemId, name: newItemName });
        renderAdminLeftMenu();
    }
}

// Function to edit an existing left menu item
function editLeftMenuItem(index) {
    const items = leftMenuItems[currentTopMenuItemId];
    const currentName = items[index].name;
    const newItemName = prompt("Edit left menu item name:", currentName);
    if (newItemName) {
        items[index].name = newItemName;
        renderAdminLeftMenu();
    }
}

// Function to delete an existing left menu item
function deleteLeftMenuItem(index) {
    if (confirm("Are you sure you want to delete this menu item?")) {
        leftMenuItems[currentTopMenuItemId].splice(index, 1);
        renderAdminLeftMenu();
    }
}

// Function to view a left menu item by navigating to its href and switching the view
// function viewLeftMenuItem(itemId, s) {
//   // Find the item in the current left menu items
//   showContent(s);
//   const item = leftMenuItems[currentTopMenuItemId].find(menuItem => menuItem.id === itemId);
  
//   if (item && item.href) {
//       // Navigate to the item's href
//       window.location.href = item.href;
//   } else {
//       console.error(`Item with ID ${itemId} not found or has no href.`);
//   }
// }

// Function to view the "Admin menu left" page when clicking "View" on a top menu item
function viewMenuItem(itemId) {
    showAdminLeftMenu(itemId);
}

function viewLeftMenuItem(itemId, s) {
  showAdminContentsLayout(itemId);
}

// Sample content items data for each left menu item
const contentItems = {
  "seminar-info": [
    { id: "seminar-today", name: "Semina hôm nay", layout: { row: 1, col: 1 } },
    { id: "seminar-content", name: "Nội dung semina hôm nay", layout: { row: 1, col: 2 } },
    { id: "seminar-image", name: "Ảnh semina hôm nay", layout: { row: 1, col: 3 } },
  ]
};

// Function to render content items in the Admin Contents Layout page
function renderAdminContentsLayout() {
  const contentTable = document.getElementById("adminContentsTable");
  const contentPreview = document.getElementById("contentPreview");
  
  // Clear previous contents
  contentTable.innerHTML = `
    <tr>
      <th>Content Item</th>
      <th>Actions</th>
    </tr>`;
  contentPreview.innerHTML = ''; // Clear existing preview boxes
  
  const items = contentItems[currentLeftMenuItemId] || [];

  items.forEach((item, index) => {
    // Populate the content table with action buttons
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <button onclick="viewContent('${item.id}')"><i class="fa fa-eye"></i></button>
        <button onclick="editContentItem(${index})"><i class="fa fa-pencil-alt"></i></button>
        <button onclick="deleteContentItem(${index})"><i class="fa fa-trash"></i></button>
        <button onclick="addContentItemAfter(${index})"><i class="fa fa-plus"></i></button>
      </td>`;
    contentTable.appendChild(row);

    // Create a structured preview box with header and content separation
    const previewBox = document.createElement("div");
    previewBox.className = "content-box";
    previewBox.style.gridColumn = item.layout.col;
    previewBox.style.gridRow = item.layout.row;

    previewBox.innerHTML = `
      <div class="section-header">${item.name}</div>
      <div class="section-content">
        <!-- Placeholder content; replace as needed -->
        This is the content area for ${item.name}.
      </div>`;

    contentPreview.appendChild(previewBox);
  });
}


// Function to show the "Admin Contents Layout" page
function showAdminContentsLayout(leftMenuItemId) {
  currentLeftMenuItemId = leftMenuItemId;
  document.getElementById("admin-menu-left").classList.add("hidden");
  document.getElementById("admin-contents-layout").classList.remove("hidden");

  // Update the header with the current content name
  document.getElementById("current-content-menu-name").textContent = leftMenuItemId;
  renderAdminContentsLayout();
}

// Add, Edit, Delete content items
function addContentItem() {
  const newItemName = prompt("Enter new content item name:");
  if (newItemName) {
    const newItem = { id: generateIdFromName(newItemName), name: newItemName, layout: { row: 1, col: 1 } };
    contentItems[currentLeftMenuItemId].push(newItem);
    renderAdminContentsLayout();
  }
}

function editContentItem(index) {
  const item = contentItems[currentLeftMenuItemId][index];
  const newName = prompt("Edit content item name:", item.name);
  if (newName) {
    item.name = newName;
    // Optionally update layout positions
    item.layout.row = prompt("Enter row:", item.layout.row) || item.layout.row;
    item.layout.col = prompt("Enter column:", item.layout.col) || item.layout.col;
    renderAdminContentsLayout();
  }
}

function deleteContentItem(index) {
  if (confirm("Are you sure you want to delete this content item?")) {
    contentItems[currentLeftMenuItemId].splice(index, 1);
    renderAdminContentsLayout();
  }
}

function viewContent(contentId) {
  // This function should navigate to the specific content view page
  alert(`Viewing content item: ${contentId}`);
}

// Function to open help page in a new tab
function openHelpPage() {
  window.open("help.html", "_blank");
}
