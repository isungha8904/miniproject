// ============================================================
// left-sidebar.js — 직무 선택 사이드바 컴포넌트
// .left-sidebar-box 안에 제목 + 메뉴 항목을 동적으로 렌더링
// 현재 URL ?id= 파라미터와 일치하는 항목을 active로 표시
// ============================================================

const SIDEBAR_ITEMS = [
  {
    id: "admin",
    label: "Administrator",
    // 집 아이콘 — 시스템 관리·운영 이미지
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
             <polyline points="9 22 9 12 15 12 15 22"/>
           </svg>`,
  },
  {
    id: "dev",
    label: "Developer",
    // 코드 브래킷 아이콘 — 개발·코딩 이미지
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <polyline points="16 18 22 12 16 6"/>
             <polyline points="8 6 2 12 8 18"/>
           </svg>`,
  },
  {
    id: "consultant",
    label: "Consultant",
    // 서류가방 아이콘 — 비즈니스·컨설팅 이미지
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
             <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
             <line x1="12" y1="12" x2="12" y2="12"/>
             <path d="M2 13h20"/>
           </svg>`,
  },
  {
    id: "pu",
    label: "Power User",
    // 사람 아이콘 — 고급 활용 사용자 이미지
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
             <circle cx="12" cy="7" r="4"/>
           </svg>`,
  },
];

function renderLeftSidebar() {
  const box = document.querySelector(".left-sidebar-box");
  if (!box) return;

  const currentId = new URLSearchParams(window.location.search).get("id") || "";

  // 섹션 제목
  const title = document.createElement("div");
  title.className = "sidebar-title";
  title.textContent = "직무 선택";
  box.appendChild(title);

  // 메뉴 항목
  SIDEBAR_ITEMS.forEach(({ id, label, icon }) => {
    const item = document.createElement("a");
    item.className = "sidebar-menu-item" + (id === currentId ? " active" : "");
    item.href = `detail.html?id=${id}`;

    item.innerHTML = `
      <span class="sidebar-item-icon">${icon}</span>
      <span class="sidebar-item-label">${label}</span>
    `;

    box.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", renderLeftSidebar);
