export const util = (() => {

    const loader = '<span class="spinner-border spinner-border-sm my-0 ms-0 me-1 p-0" style="height: 0.8rem; width: 0.8rem;"></span>';

    const listsMarkDown = [
        ['*', `<strong class="text-theme-auto">$1</strong>`],
        ['_', `<em class="text-theme-auto">$1</em>`],
        ['~', `<del class="text-theme-auto">$1</del>`],
        ['```', `<code class="font-monospace text-theme-auto">$1</code>`]
    ];

    const deviceTypes = [
        { type: 'Mobile', regex: /Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i },
        { type: 'Tablet', regex: /iPad|Android(?!.*Mobile)|Tablet/i },
        { type: 'Desktop', regex: /Windows NT|Macintosh|Linux/i },
    ];

    const browsers = [
        { name: 'Chrome', regex: /Chrome|CriOS/i },
        { name: 'Safari', regex: /Safari/i },
        { name: 'Edge', regex: /Edg|Edge/i },
        { name: 'Firefox', regex: /Firefox|FxiOS/i },
        { name: 'Opera', regex: /Opera|OPR/i },
        { name: 'Internet Explorer', regex: /MSIE|Trident/i },
        { name: 'Samsung Browser', regex: /SamsungBrowser/i },
    ];

    const operatingSystems = [
        { name: 'Windows', regex: /Windows NT ([\d.]+)/i },
        { name: 'MacOS', regex: /Mac OS X ([\d_.]+)/i },
        { name: 'Android', regex: /Android ([\d.]+)/i },
        { name: 'iOS', regex: /OS ([\d_]+) like Mac OS X/i },
        { name: 'Linux', regex: /Linux/i },
        { name: 'Ubuntu', regex: /Ubuntu/i },
        { name: 'Chrome OS', regex: /CrOS/i },
    ];

    /**
     * @param {string} unsafe
     * @returns {string}
     */
    const escapeHtml = (unsafe) => {
        return String(unsafe)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    /**
     * @param {string} message
     * @returns {{ success: function, error: function, warning: function, info: function, custom: function }}
     */
    const notify = (message) => {
        const exec = (emoji) => {
            window.alert(`${emoji} ${message}`);
        };

        return {
            success: () => exec('🟩'),
            error: () => exec('🟥'),
            warning: () => exec('🟨'),
            info: () => exec('🟦'),
            custom: (emoji) => exec(emoji),
        };
    };

    /**
     * @param {string} message
     * @returns {boolean}
     */
    const ask = (message) => window.confirm(`🟦 ${message}`);

    /**
     * @param {HTMLElement} el
     * @param {string} html
     * @returns {HTMLElement}
     */
    const safeInnerHTML = (el, html) => {
        el.replaceChildren(document.createRange().createContextualFragment(html));
        return el;
    };

    /**
     * @param {HTMLElement} el 
     * @param {boolean} isUp 
     * @param {number} step
     * @returns {Promise<HTMLElement>}
     */
    const changeOpacity = (el, isUp) => new Promise((res) => {
        let start = null;
        const duration = 600; // total waktu animasi (ms)

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);

            // easing (ease-out cubic)
            const eased = isUp 
                ? progress ** (1/3)   // naik → smooth di awal, cepat di akhir
                : 1 - (1 - progress) ** 3; // turun → cepat di awal, lambat di akhir

            const target = isUp ? eased : 1 - eased;
            el.style.opacity = target.toFixed(2);

            if (!isUp) {
                let currentY = parseFloat(el.dataset.y || 0);
                // geser lebih sedikit ketika mendekati akhir
                currentY -= (2 * (1 - progress)); 
                el.dataset.y = currentY;
                el.style.transform = `translateY(${currentY}px)`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.style.opacity = isUp ? "1" : "0";
                res(el);
            }
        };

        requestAnimationFrame(animate);
    });

    /**
     * @param {function} callback
     * @param {number} [delay=0]
     * @returns {void}
     */
    const timeOut = (callback, delay = 0) => {
        let clear = null;
        const c = () => {
            callback();
            clearTimeout(clear);
            clear = null;
        };

        clear = setTimeout(c, delay);
    };

    /**
     * @param {function} callback
     * @param {number} [delay=100]
     * @returns {function}
     */
    const debounce = (callback, delay = 100) => {
        let timeout = null;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => callback(...args), delay);
        };
    };

    /**
     * @param {HTMLElement} button
     * @param {string} [message='Loading']
     * @param {boolean} [replace=false]
     * @returns {object}
     */
    const disableButton = (button, message = 'Loading', replace = false) => {
        button.disabled = true;

        const tmp = button.innerHTML;
        safeInnerHTML(button, replace ? message : loader + message);

        return {
            restore: (disabled = false) => {
                button.innerHTML = tmp;
                button.disabled = disabled;
            },
        };
    };

    /**
     * @param {HTMLElement} checkbox
     * @returns {object}
     */
    const disableCheckbox = (checkbox) => {
        checkbox.disabled = true;

        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        const tmp = label.innerHTML;
        safeInnerHTML(label, loader + tmp);

        return {
            restore: () => {
                label.innerHTML = tmp;
                checkbox.disabled = false;
            },
        };
    };

    /**
     * @param {HTMLElement} button
     * @param {string} [message=null]
     * @param {number} [timeout=1500]
     * @returns {Promise<void>}
     */
    const copy = async (button, message = null, timeout = 1500) => {
        const data = button.getAttribute('data-copy');

        if (!data || data.length === 0) {
            notify('Nothing to copy').warning();
            return;
        }

        button.disabled = true;

        try {
            await navigator.clipboard.writeText(data);
        } catch(err) {
            console.error('Clipboard error:', err);
            button.disabled = false;
            notify('Failed to copy').error();
            return;
        }

        const tmp = button.innerHTML;
        safeInnerHTML(button, message ? message : '<p class="fw-bold m-0"><i class="fa-solid fa-check"></i> Success</p>');

        timeOut(() => {
            button.disabled = false;
            button.innerHTML = tmp;
        }, timeout);
    };

    /**
     * @param {string} str
     * @returns {string}
     */
    const base64Encode = (str) => {
        const encoder = new TextEncoder();
        const encodedBytes = encoder.encode(str);
        return window.btoa(String.fromCharCode(...encodedBytes));
    };

    /**
     * @param {string} str
     * @returns {string}
     */
    const base64Decode = (str) => {
        const decoder = new TextDecoder();
        const decodedBytes = Uint8Array.from(window.atob(str), (c) => c.charCodeAt(0));
        return decoder.decode(decodedBytes);
    };

    /**
     * @param {string} userAgent 
     * @returns {string}
     */
    const parseUserAgent = (userAgent) => {
        if (!userAgent || typeof userAgent !== 'string') {
            return 'Unknown';
        }

        const deviceType = deviceTypes.find((i) => i.regex.test(userAgent))?.type ?? 'Unknown';
        const browser = browsers.find((i) => i.regex.test(userAgent))?.name ?? 'Unknown';
        const osMatch = operatingSystems.find((i) => i.regex.test(userAgent));

        const osName = osMatch ? osMatch.name : 'Unknown';
        const osVersion = osMatch ? (userAgent.match(osMatch.regex)?.[1]?.replace(/_/g, '.') ?? null) : null;

        return `${browser} ${deviceType} ${osVersion ? `${osName} ${osVersion}` : osName}`;
    };

    /**
     * @param {string} tz 
     * @returns {string}
     */
    const getGMTOffset = (tz) => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            hourCycle: 'h23',
            hour: 'numeric',
        });

        let offset = (parseInt(formatter.format(now)) - now.getUTCHours() + 24) % 24;
        if (offset > 12) {
            offset -= 24;
        }

        return `GMT${offset >= 0 ? '+' : ''}${offset}`;
    };

    /**
     * @param {string} str 
     * @returns {string}
     */
    const convertMarkdownToHTML = (str) => {
        listsMarkDown.forEach(([k, v]) => {
            str = str.replace(new RegExp(`\\${k}(\\S(?:[\\s\\S]*?\\S)?)\\${k}`, 'g'), v);
        });

        return str;
    };

    return {
        loader,
        ask,
        copy,
        notify,
        timeOut,
        debounce,
        escapeHtml,
        base64Encode,
        base64Decode,
        disableButton,
        disableCheckbox,
        safeInnerHTML,
        parseUserAgent,
        changeOpacity,
        getGMTOffset,
        convertMarkdownToHTML,
    };
})();