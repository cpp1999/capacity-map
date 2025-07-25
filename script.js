// 你的飞书API地址（公开链接）
 const FEISHU_API = "https://open.feishu.cn/xxx"; // TODO: 替换成你的飞书API

// 初始化地图（中心点：中国，缩放：4）
const map = L.map('map').setView([35, 105], 4);

// 使用 OpenStreetMap 免费底图
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// 从飞书获取数据并绘制标记
axios.get(FEISHU_API)
  .then(res => {
    const data = res.data.data.items || [];  // 根据你的API结构调整
    data.forEach(item => {
      const lat = parseFloat(item.lat);
      const lng = parseFloat(item.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(map)
          .bindPopup(`<div class="popup">
            <b>${item.factory_name}</b><br/>
            产能: ${item.capacity} 吨<br/>
            产品等级: ${item.grade}<br/>
            状态: ${item.status}<br/>
            公司: ${item.company}
          </div>`);
      }
    });
  })
  .catch(err => console.error("获取飞书数据失败:", err));
