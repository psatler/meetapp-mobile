import axios from 'axios';

// android studio emulator: http://10.0.0.2:3333
// 127.0.0.1:8554
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// ip a | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'

export default api;
