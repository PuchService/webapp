const API_BASE = "http://localhost:8080/api"; // твой бэк

const api = {
  getServices: () => fetch(`${API_BASE}/services`).then(r => r.json()),
  getMasters: (serviceId) => fetch(`${API_BASE}/masters?serviceId=${serviceId}`).then(r => r.json()),
  getSlots: (masterId) => fetch(`${API_BASE}/slots?masterId=${masterId}`).then(r => r.json()),
  book: (body) => fetch(`${API_BASE}/booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(r => r.json())
};