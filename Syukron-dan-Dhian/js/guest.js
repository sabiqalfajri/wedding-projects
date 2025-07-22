import { guest } from './app/guest/guest.js';

console.log('guest.js jalan');
((w) => {
    w.undangan = guest.init();
})(window);