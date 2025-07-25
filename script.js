// 模拟数据（可替换为飞书API返回）
const data = [
  {
    factory_name: "示例工厂A",
    capacity: 1000,
    lat: 31.2,
    lng: 121.5,
    grade: "食品级",
    status: "运行中",
    company: "示例公司"
  },
  {
    factory_name: "示例工厂B",
    capacity: 2000,
    lat: 39.9,
    lng: 116.4,
    grade: "工业级",
    status: "建设中",
    company: "示例公司2"
  }
];

// 初始化地图
const map = L.map('map').setView([35, 105], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// 显示数据
data.forEach(item => {
  L.marker([item.lat, item.lng])
    .addTo(map)
    .bindPopup(`<b>${item.factory_name}</b><br/>产能: ${item.capacity} 吨<br/>等级: ${item.grade}<br/>状态: ${item.status}<br/>公司: ${item.company}`);
});
