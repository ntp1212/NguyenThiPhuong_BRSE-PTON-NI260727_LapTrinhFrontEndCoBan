const bookmarkList = document.getElementById("bookmark-list");
const modalOverlay = document.getElementById("modal-overlay");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameInput = document.getElementById("website-name");
const websiteUrlInput = document.getElementById("website-url");
const nameError = document.getElementById("name-error");
const urlError = document.getElementById("url-error");
const emptyMessage = document.getElementById("empty-message");

const STORAGE_KEY = "myBookmarks";

const starterBookmarks = [
  { id: "starter-google", name: "Google - Search Engine", url: "https://www.google.com" },
  { id: "starter-youtube", name: "YouTube - Video Sharing", url: "https://www.youtube.com" }
];

let bookmarks = loadBookmarks();

function loadBookmarks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(starterBookmarks));
      return [...starterBookmarks];
    }

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Không thể đọc dữ liệu Bookmark:", error);
    return [];
  }
}

function saveBookmarks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

function normalizeUrl(value) {
  let urlText = value.trim();

  // Nếu người dùng nhập google.com mà không nhập giao thức,
  // tự động bổ sung https://
  if (!/^https?:\/\//i.test(urlText)) {
    urlText = "https://" + urlText;
  }

  try {
    const url = new URL(urlText);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    if (!url.hostname.includes(".") && url.hostname !== "localhost") {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function renderBookmarks() {
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bookmark) => {
    const card = document.createElement("div");
    card.className = "bookmark-card";

    const link = document.createElement("a");
    link.className = "bookmark-link";
    link.href = bookmark.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.cssText = "display:flex;align-items:center;min-width:0;flex:1;color:inherit;text-decoration:none;";

    const icon = document.createElement("img");
    icon.className = "site-icon";
    icon.alt = "";
    icon.loading = "lazy";
    icon.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(getHostname(bookmark.url))}&sz=32`;
    icon.onerror = () => {
      icon.style.display = "none";
    };

    const name = document.createElement("span");
    name.className = "site-name";
    name.textContent = bookmark.name;

    link.append(icon, name);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-bookmark";
    deleteBtn.type = "button";
    deleteBtn.textContent = "×";
    deleteBtn.setAttribute("aria-label", `Xóa ${bookmark.name}`);
    deleteBtn.addEventListener("click", () => deleteBookmark(bookmark.id));

    card.append(link, deleteBtn);
    bookmarkList.appendChild(card);
  });

  emptyMessage.hidden = bookmarks.length !== 0;
}

function openModal() {
  modalOverlay.classList.remove("is-hidden");
  nameError.textContent = "";
  urlError.textContent = "";
  websiteNameInput.focus();
}

function closeModal() {
  modalOverlay.classList.add("is-hidden");
  bookmarkForm.reset();
  nameError.textContent = "";
  urlError.textContent = "";
}

function deleteBookmark(id) {
  const confirmed = window.confirm("Bạn có chắc muốn xóa website này không?");
  if (!confirmed) return;

  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  saveBookmarks();
  renderBookmarks();
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalOverlay.classList.contains("is-hidden")) {
    closeModal();
  }
});

bookmarkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = websiteNameInput.value.trim();
  const rawUrl = websiteUrlInput.value.trim();
  const normalizedUrl = normalizeUrl(rawUrl);

  nameError.textContent = "";
  urlError.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Vui lòng nhập tên website.";
    isValid = false;
  }

  if (rawUrl === "") {
    urlError.textContent = "Vui lòng nhập URL website.";
    isValid = false;
  } else if (!normalizedUrl) {
    urlError.textContent = "URL không hợp lệ. Ví dụ: https://example.com";
    isValid = false;
  }

  if (!isValid) return;

  const duplicate = bookmarks.some(
    (bookmark) => bookmark.url.toLowerCase() === normalizedUrl.toLowerCase()
  );

  if (duplicate) {
    urlError.textContent = "Website này đã được lưu rồi.";
    return;
  }

  bookmarks.push({
    id: (window.crypto && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    url: normalizedUrl
  });

  saveBookmarks();
  renderBookmarks();
  closeModal();
});

renderBookmarks();

// Mở form khi khởi động để gần giống ảnh mẫu.
openModal();
